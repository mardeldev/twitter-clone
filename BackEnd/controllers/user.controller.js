import { validationResult } from "express-validator";
import { userLoginService, userRegisterService } from "../services/user.service.js";

export const userLoginController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Login failed');
    }
    try {
        const response = await userLoginService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Login failed');
    }
}

export const userRegisterController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Registering new user failed');
    }
    try {
        const response = await userRegisterService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Registering new user failed.');
    }
}