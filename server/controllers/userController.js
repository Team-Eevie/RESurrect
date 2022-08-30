const db = require('../models/models.ts');

const userController = {};


/*user registration and login*/

userController.register = async (req, res, next) => {
  try {
    //console.log('req.body', req.body)
    const { email, pw, name } = req.body;
    console.log('registering user with:' + email + pw + name);
    const params = [ email, pw, name ];
    const queryString = `
    INSERT INTO users
      (email, pw, name )
    VALUES
      ($1, $2, $3 )
    RETURNING *`;
    
    const user = await db.query(queryString, params);
    res.locals.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error at middleware userController.register',
      status: 501,
      message: {
        err: 'Error has occured while registering',
      },
    });;
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
    return next ({
      log: 'Error at middleware userController.login',
      status: 501,
      message: {
        err: 'Error has occured while logging in',
      },
    });;
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
    return next ({
      log: 'Error at middleware userController.setUserCookie',
      status: 501,
      message: {
        err: 'Error has occured while creating cookie',
      },
    });
  }
}

module.exports = userController;