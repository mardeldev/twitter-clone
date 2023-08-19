import { UserModel } from '../models/users.model.js';
import bcrypt from 'bcrypt';

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
        throw e;
    }
}