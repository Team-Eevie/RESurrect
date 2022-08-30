import express, { NextFunction, Request, Response } from "express"; 
import userController from '../controllers/userController';

const userRouter = express.Router();

/**
 * Receives username and password strings in request body and establishes user in database.
 */
userRouter.post(
  '/register',
  userController.register,
  // userController.setUserCookie,
  (req: Request, res: Response) => {
    console.log('Responding to /register');
    return res.sendStatus(201);
  }
);

/**
 * Receives username and password strings in request body and attempts login using info. 
 */
userRouter.post(
  '/login',
  userController.login,
  // userController.setUserCookie,
  (req: Request, res: Response) => {
    console.log('Responding to /login');
    return res.status(200).json(res.locals.user.username);
  }
);

/**
 * Logs out a user - clears their SSID and username cookies
 */
userRouter.get('/logout', (req: Request, res: Response) => {
  console.log('Responding to /logout');
  return res.clearCookie('SSID').clearCookie('username').sendStatus(204);
});


export default userRouter;
