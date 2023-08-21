import axios from "axios";
import { useGetUserID } from "../hooks";




export const getPeepData = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/");
        return responseData.data;
    } catch (error) {
        return error;
    }
}


export const getFavPeeps = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();
    try {
        const response = await axios.get(`http://localhost:3000/savedpeeps/ids/${userID}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const getAllFavPeeps = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();
    try {
        const response = await axios.get(`http://localhost:3000/savedpeeps/${userID}`);
        return response;
    } catch (error) {
        return error;
    }
}


export const registerUser = async (username, password) => {
    try {
        await axios.post("http://localhost:3000/auth/register", {
            username,
            password
        });
        alert("You have succesfully registered, please proceed to login!")

    } catch (error) {
        console.error(error);
    }
}

export const login = async (username, password) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/login", {
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
        await axios.post("http://localhost:3000/createpeep", peepContent);
    } catch (error) {
        console.error(error);

    }
}

export const savePeep = async (peepID, cookies) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userID = useGetUserID();

    try {
        const response = await axios.put("http://localhost:3000/", { peepID, userID });
        return response
    } catch (error) {
        console.error(error);
        console.log(cookies);
    }
}