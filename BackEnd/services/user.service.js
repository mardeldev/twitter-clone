import { UserModel } from '../models/users.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { config } from "dotenv";

config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

export const userRegisterService = async reqBody => {
    try {
        const { username, password } = reqBody;
        const user = await UserModel.findOne({ username: username });
        const hashedPassword = await bcrypt.hash(password, 10);

        if (user) { return { message: "Username already taken!" } }

        const newUser = new UserModel({ username: username, password: hashedPassword });
        await newUser.save();
        return { message: "Successfully registered! You can now continue to login." };
    } catch (error) {
        return e;
    }
}

export const userLoginService = async reqBody => {
    try {
        const { username, password } = reqBody;
        const user = await UserModel.findOne({ username: username });

        if (!user) { return { message: "Login failed. User does not exist!" } }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) { return { message: "Login failed. Username and password combination is incorrect." } }

        const token = jwt.sign({ id: user._id }, process.env.SECRET);


        return { token, userID: user._id, username: username };
    } catch (error) {
        return e;
    }
}