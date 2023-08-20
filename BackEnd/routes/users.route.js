import express from 'express';
import { userLoginController, userRegisterController } from '../controllers/user.controller.js';
import { newUserValidation } from '../middleware/chitter.validation.js';

const router = express.Router()



router.route("/register")
    .post(newUserValidation, userRegisterController);


router.route("/login")
    .post(userLoginController);





export { router as userRouter };