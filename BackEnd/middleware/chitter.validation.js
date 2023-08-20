import { check } from "express-validator";

export const newUserValidation = [
    check('username').notEmpty(),
    check('password').notEmpty()
]

export const newPeepValidation = [
    check('peepContent').notEmpty(),
]