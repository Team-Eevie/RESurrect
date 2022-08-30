import express, { NextFunction, Request, Response } from "express"; 
import controller from '../controllers/userController';

const router = express.Router();

/**
 * Receives username and password strings in request body and establishes user in database.
 */
router.post(
  '/register',
  controller.register,
  // controller.setUserCookie,
  (req: Request, res: Response) => {
    console.log('Responding to /register');
    return res.sendStatus(201);
  }
);

/**
 * Receives username and password strings in request body and attempts login using info. 
 */
router.post(
  '/login',
  controller.login,
  // controller.setUserCookie,
  (req: Request, res: Response) => {
    console.log('Responding to /login');
    return res.status(200).json(res.locals.user.username);
  }
);

/**
 * Logs out a user - clears their SSID and username cookies
 */
router.get('/logout', (req: Request, res: Response) => {
  console.log('Responding to /logout');
  return res.clearCookie('SSID').clearCookie('username').sendStatus(204);
});


export default router;
