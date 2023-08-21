import express from 'express';
import { userLoginController, userRegisterController } from '../controllers/user.controller.js';
import { newUserValidation } from '../middleware/chitter.validation.js';
import jwt from 'jsonwebtoken';

const router = express.Router()



router.route("/register")
    .post(newUserValidation, userRegisterController);


router.route("/login")
    .post(userLoginController);

export { router as userRouter };

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err) => {
            if (err) return res.sendStatus(403);
            next();
        })
    } else {
        res.sendStatus(401);
    }
}