const db = require('../models/models.ts');

const userController = {};


/*user registration and login*/

userController.register = async (req, res, next) => {
  try {
    console.log('registering user');
    const { email, pw } = req.body;
    const params = [ email, pw ];
    const queryString = `
    INSERT INTO users
      (email, pw)
    VALUES
      ($1, $2)
    RETURNING *`;
    
    const user = await db.query(queryString, params);
    res.locals.user = user;
    return next();
  } catch (err) {
    return next(err);
  }
};

userController.login = async (req, res, next) => {
  try {
    const { email, pw } = req.body;
    const params = [ email, pw ];
    const queryString = `
    SELECT * FROM users 
    WHERE email='${email}' and pw='${pw}'
    VALUES
      ($1, $2)
    RETURNING *`;
    //const sqlQuery = `SELECT * FROM users WHERE email='${email}';`
    
    const user = await db.query(queryString, params);
    if (!user) throw new Error('Incorrect login credentials');
    res.locals.user = user;
    return next();
  } catch (err) {
    return next(err);
  }
};

userController.setUserCookie = async (req, res, next) => {
  try {
    const { user } = res.locals; 
    res.cookie('SSID', `${user._id}`, { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), httpOnly: true});
    res.cookie('username', `${user.username}`, { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), httpOnly: true}); 
    return next(); 
  }
  catch (err) {
    next ({
      log: 'Error at middleware controller.setUserCookie',
      status: 501,
      message: {
        err: 'Error has occured while creating cookie',
      },
    });
  }
}

module.exports = userController;