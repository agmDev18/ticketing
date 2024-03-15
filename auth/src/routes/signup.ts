import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('Email')
        .isEmail()
        .withMessage('Please, provide a valid email.'),
    body('Password')
        .trim()
        .isLength({ min: 4, max: 20})
        .withMessage('Password must contain between 4 to 20 characters')
], (req: Request, res: Response) => {
    res.send('Hello World');
});

export { router as signupRouter };