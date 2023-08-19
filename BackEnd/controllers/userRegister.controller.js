import { validationResult } from "express-validator";
import { userRegisterService } from "../services/user.service.js";

export const userRegisterController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Registering new user failed');
    }
    try {
        const responseMessage = await userRegisterService(req.body);
        res.status(201).json(responseMessage);
    } catch (error) {
        console.log(error);
        res.status(400).send('Registering new user failed');
    }
}