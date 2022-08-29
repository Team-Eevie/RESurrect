const userController = {};


/*user registration and login*/

userController.register = async (req, res, next) => {
    try {
      console.log('registering user');
      const { email, password } = req.body;
      const queryString = 
      res.locals.user = user;
      res.send(user);
    } catch (err) {
      return next(err);
    }
  };



module.exports = userController;