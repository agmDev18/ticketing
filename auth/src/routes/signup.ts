import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Please, provide a valid email.'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20})
        .withMessage('Password must contain between 4 to 20 characters')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new Error('Invalid email or password');
    };

    console.log('Creating a user...');
   // throw new Error(`Can't connect to the database`);
    res.send({});
});

export { router as signupRouter };