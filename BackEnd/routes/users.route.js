import express from 'express';
import jwt from 'jsonwebtoken';
import { userRegisterController } from '../controllers/userRegister.controller.js';
import { newUserValidation } from '../middleware/chitter.validation.js';

const router = express.Router()



router.route("/register")
    .post(newUserValidation, userRegisterController)


router.route("/login")
    .post();





export { router as userRouter };