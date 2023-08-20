import { PeepModel } from '../models/peeps.model.js';
import { UserModel } from '../models/users.model.js';

export const peepCreateService = async reqBody => {
    const peeps = new PeepModel(reqBody);
    try {
        const response = await peeps.save();
        return response;
    } catch (error) {
        return e;
    }
}

export const peepGetService = async () => {
    try {
        const response = await PeepModel.find({});
        return response;
    } catch (error) {
        return error;
    }
}


export const peepSaveService = async (reqBody) => {
    try {
        const peep = await PeepModel.findById(reqBody.peepID);
        const user = await UserModel.findById(reqBody.userID);
        user.savedPeeps.push(peep);
        await user.save();
        return { savedPeeps: user.savedPeeps };
    } catch (error) {
        return error;
    }
}



export const getFavPeepService = async (reqBody) => {
    try {
        const user = await UserModel.findById(reqBody.userID);
        return ({ savedPeeps: user?.savedPeeps });
    } catch (error) {
        return error;
    }
}


export const getFavPeepsService = async (reqBody) => {
    try {
        const user = await UserModel.findById(reqBody.userID);
        const savedPeeps = await PeepModel.find({
            _id: { $in: user.savedPeeps },
        });
        return ({ savedPeeps });
    } catch (error) {
        return error;
    }
}