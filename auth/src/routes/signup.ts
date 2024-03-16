import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    };

    console.log('Creating a user...');
    res.send('Hello World');

    res.send({});
});

export { router as signupRouter };