import axios from "axios";

export const getPeepData = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/response");
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