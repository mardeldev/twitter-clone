import { validationResult } from "express-validator";
import { peepCreateService, peepGetService, peepSaveService, getFavPeepsService, getFavPeepService } from "../services/peep.service.js";

export const peepCreateController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Failed to post peep due to validation error.');
    }
    try {
        const response = await peepCreateService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to post peep.');
    }
}


export const peepGetController = async (req, res) => {

    try {
        const response = await peepGetService();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}


export const saveFavePeepsController = async (req, res) => {

    try {
        const response = await peepSaveService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to fav peep.');
    }
}

export const getFavPeepsController = async (req, res) => {

    try {
        const response = await getFavPeepsService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to fav peep.');
    }
}


export const getFavPeepController = async (req, res) => {

    try {
        const response = await getFavPeepService(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to fav peep.');
    }
}