const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//define routes: 

/*USER AUTH*/

router.post('/register', userController.register);

router.post('/login', userController.login);



module.exports = userRouter;