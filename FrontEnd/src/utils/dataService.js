import axios from "axios";
import { useGetUserID } from "../hooks";




export const getPeepData = async () => {
    try {
        const responseData = await axios.get("https://chitter-31qm.onrender.com/");
        return responseData.data;
    } catch (error) {
        return error;
    }
}


export const getFavPeeps = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();
    try {
        const response = await axios.get(`https://chitter-31qm.onrender.com/savedpeeps/ids/${userID}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const getAllFavPeeps = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();
    try {
        const response = await axios.get(`https://chitter-31qm.onrender.com/savedpeeps/${userID}`);
        return response;
    } catch (error) {
        return error;
    }
}


export const registerUser = async (username, password) => {
    try {
        const response = await axios.post("https://chitter-31qm.onrender.com/auth/register", {
            username,
            password
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const login = async (username, password) => {
    try {
        const response = await axios.post("https://chitter-31qm.onrender.com/auth/login", {
            username,
            password
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const post = async (peepContent) => {
    try {
        await axios.post("https://chitter-31qm.onrender.com/createpeep", peepContent);
    } catch (error) {
        console.error(error);

    }
}

export const savePeep = async (peepID, cookies) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();

    try {
        const response = await axios.put("https://chitter-31qm.onrender.com/", { peepID, userID });
        return response
    } catch (error) {
        console.error(error);
        console.log(cookies);
    }
}