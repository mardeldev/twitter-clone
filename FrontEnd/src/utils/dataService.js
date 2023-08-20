import axios from "axios";


export const getPeepData = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/getPeeps");
        return responseData.data;
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

export const login = async (username, password, setCookies) => {
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