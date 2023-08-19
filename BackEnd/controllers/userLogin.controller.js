import { validationResult } from "express-validator";
import { userLoginService } from "../services/user.service.js";

export const userLoginController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Login failed');
    }
    try {
        const responseMessage = await userLoginService(req.body);
        res.status(201).json(responseMessage);
    } catch (error) {
        console.log(error);
        res.status(400).send('Login failed');
    }
}

