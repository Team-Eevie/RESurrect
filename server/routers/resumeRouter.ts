import express, { NextFunction, Request, Response } from "express"; 
import resumeController from '../controllers/resumeController';

const resumeRouter = express.Router();

// Returned data should always be an object conatianing either Skills, Experience, or Bulletpoints as objects
// {
// skills: {},
// experience: {},
// }

resumeRouter.post(
  '/getAll',
  resumeController.getAllData,
  (req: Request, res: Response) => {
    console.log('Responding to /getAll');
    return res.status(200).json(res.locals.data);
  }
);

// resumeRouter.get(
//   '/getSkills',
//   resumeController.getSkillsData,
//   (req: Request, res: Response) => {
//     console.log('Responding to /getSkills');
//     return res.status(200).json(res.locals.data);
//   }
// );

// resumeRouter.get(
//   '/getExperience',
//   resumeController.getExperienceData,
//   (req: Request, res: Response) => {
//     console.log('Responding to /getExperience');
//     return res.status(200).json(res.locals.data);
//   }
// );

// resumeRouter.get(
//   '/getBulletpoints',
//   resumeController.getBulletpointsData,
//   (req: Request, res: Response) => {
//     console.log('Responding to /getBulletpoints');
//     return res.status(200).json(res.locals.data);
//   }
// );

// Save info for the user:

resumeRouter.post(
  '/saveSkill',
  resumeController.saveSkill,
  (req: Request, res: Response) => {
    console.log('Responding to /saveSkill');
    return res.status(200).json(res.locals.data);
  }
);

resumeRouter.post(
  '/saveExperience',
  resumeController.saveExperience,
  (req: Request, res: Response) => {
    console.log('Responding to /saveExperience');
    return res.status(200).json(res.locals.data);
  }
);

resumeRouter.post(
  '/saveBulletpoint',
  resumeController.saveBulletpoint,
  (req: Request, res: Response) => {
    console.log('Responding to /saveBulletpoint');
    return res.status(200).json(res.locals.data);
  }
);


export default resumeRouter;