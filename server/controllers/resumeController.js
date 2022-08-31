const db = require('../models/models.ts');
const resumeController = {};

//GET requests to /getAll, getSkills, /getExperience and /getBulletpoints

//GET from /getAll
resumeController.getAllData = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    // Save skills data to 'skills' object
    const querySkills = `
    SELECT * FROM skills
    WHERE user_id=${user_id}`;
    const skills = await db.query(querySkills);
    if (!skills) throw new Error('No data found');
    
    // Save experiences and bulletpoint data to 'experience' object
    const queryExperiences = `
    SELECT * FROM experiences 
    LEFT JOIN bulletpoints ON experiences._id=bulletpoints.experience_id
    WHERE experiences.user_id=${user_id}`;
    const experiences = await db.query(queryExperiences);
    if (!experiences) throw new Error('No data found');

    // Include the experience and skills objects inside the respone object
    res.locals.data = {
      skills: skills.rows[0],
      experiences: experiences.rows,
    };
    return next();
    
  } catch (err) {
    console.log(err)
    return next ({
      log: 'Error at middleware userController.getAllData',
      status: 501,
      message: {err: 'Error has occured while gathering data'}
    });
  }
};

resumeController.getSkills = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const querySkills = `
    SELECT * FROM skills
    WHERE user_id=${user_id}`;
    
    const skills = await db.query(querySkills);
    if (!skills) throw new Error('No data found');
    res.locals.data = skills.rows[0];
    return next();
    
  } catch (err) {
    console.log(err)
    return next ({
      log: 'Error at middleware userController.getAllData',
      status: 501,
      message: {err: 'Error has occured while gathering data'}
    });
  }
};

//POST requests to newSkills, newExperience and newBulletpoints
resumeController.saveSkill = async (req, res, next) => {
  try {
    //console.log('req.body', req.body)
    const { user_id, entry, hide } = req.body;
    console.log(user_id);
    const params = [ user_id, entry, hide ];
    const queryString = `
    INSERT INTO skills
      ( user_id, entry, hide )
    VALUES
      ($1, $2, $3 )
    RETURNING *`;
    
    const skill = await db.query(queryString, params);
    res.locals.data = skill;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error at middleware userController.register',
      status: 501,
      message: {err: 'Error has occured while registering'}
    });
  }
};

resumeController.saveExperience = async (req, res, next) => {
  try {
    //console.log('req.body', req.body)
    const { user_id, position, company, location, start_month, start_year, end_month, end_year, hide } = req.body;
    console.log(user_id);
    const params = [ user_id, position, company, location, start_month, start_year, end_month, end_year, hide ];
    const queryString = `
    INSERT INTO experiences
      ( user_id, position, company, location, start_month, start_year, end_month, end_year, hide )
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`;
    
    const experience = await db.query(queryString, params);
    res.locals.data = experience.rows[0];
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error at middleware resumeController.saveExperience',
      status: 501,
      message: {err: 'Error has occured while saving experience'}
    });
  }
};

resumeController.saveBulletpoint = async (req, res, next) => {
  try {
    //console.log('req.body', req.body)
    const { experience_id, entry, hide  } = req.body;
    console.log('experience_id', experience_id);
    const params = [ experience_id, entry, hide ];
    const queryString = `
    INSERT INTO bulletpoints
      ( experience_id, entry, hide )
    VALUES
      ($1, $2, $3)
    RETURNING *`;
    
    const bulletpoint = await db.query(queryString, params);
    res.locals.data = bulletpoint.rows[0];
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error at middleware resumeController.saveBulletpoint',
      status: 501,
      message: {err: 'Error has occured while saving bulletpoint'}
    });
  }
};

//PUT requests to editSkills, editExperience and editBulletpoints

resumeController.editSkill = async (req, res, next) => {
  try {
    const { user_id, _id, entry, hide } = req.body;
    const querySkill = `
    UPDATE skills
    SET entry='${entry}', hide='${hide}'
    WHERE user_id='${user_id}' AND _id='${_id}'
    RETURNING *`;
    
    const skill = await db.query(querySkill);
    if (!skill) throw new Error('No data found');
    res.locals.data = skill.rows[0];
    return next();
    
  } catch (err) {
    console.log(err)
    return next ({
      log: 'Error at middleware resumeController.editSkills',
      status: 501,
      message: {err: 'Error has occured while editing skills'}
    });
  }
};

resumeController.editExperience = async (req, res, next) => {
  try {
    const { _id, user_id, position, company, location, start_month, start_year, end_month, end_year, hide } = req.body;
    const queryExperience = `
    UPDATE experiences
    SET position='${position}', company='${company}', location='${location}', start_month='${start_month}', start_year='${start_year}', end_month='${end_month}', end_year='${end_year}', hide='${hide}'
    WHERE user_id=${user_id} AND _id=${_id}
    RETURNING *`;
    
    const experience = await db.query(queryExperience);
    console.log(experience);
    if (!experience) throw new Error('No data found');
    res.locals.data = experience.rows[0];
    return next();
    
  } catch (err) {
    console.log(err)
    return next ({
      log: 'Error at middleware resumeController.editExperience',
      status: 501,
      message: {err: 'Error has occured while editing experience'}
    });
  }
};

resumeController.editBulletpoint = async (req, res, next) => {
  try {
    const { _id, experience_id, entry, hide } = req.body;
    const queryBulletpoint = `
    UPDATE bulletpoints
    SET experience_id='${experience_id}', entry='${entry}', hide='${hide}'
    WHERE _id=${_id}
    RETURNING *`;
    
    const bulletpoint = await db.query(queryBulletpoint);
    console.log(bulletpoint);
    if (!bulletpoint) throw new Error('No data found');
    res.locals.data = bulletpoint.rows[0];
    return next();
    
  } catch (err) {
    console.log(err)
    return next ({
      log: 'Error at middleware resumeController.editBulletpoint',
      status: 501,
      message: {err: 'Error has occured while editing bulletpoint'}
    });
  }
};

//DELETE requests to deleteSkills, deleteExperience and deleteBulletpoints






module.exports = resumeController;