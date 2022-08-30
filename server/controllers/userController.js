const userController = {};


/*user registration and login*/

userController.register = async (req, res, next) => {
  try {
    console.log('registering user');
    const { username, email, password } = req.body;
    const user = await User.create({
      username,
      email,
      password,
    });
    res.locals.user = user;
    res.send(user);
  } catch (err) {
    return next(err);
  }
};

  userController.login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (!user) throw new Error('Incorrect login credentials');
      res.send(user);
    } catch (err) {
      return next(err);
    }
  };

module.exports = userController;