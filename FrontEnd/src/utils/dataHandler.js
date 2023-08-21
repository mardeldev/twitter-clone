import { getPeepData, registerUser, login, post, savePeep } from "./dataService.js";

export const getPeeps = async () => {
    const data = await getPeepData();
    if (data?.error) {
        return data.error.message;
    }
    return data;

}


export const registerNewUser = async (username, password) => {
    const response = await registerUser(username, password);
    if (response?.error) {
        return response.error.message;
    }
    return response;
}

export const loginUser = async (username, password, setCookies) => {
    const response = await login(username, password, setCookies);
    if (response?.error) {
        return response.error.message;
    }
    return response;
}


export const postPeep = async (peepContent) => {
    const response = await post(peepContent);
    if (response?.error) {
        return response.error.message;
    }
    return response;
}


export const saveAPeep = async (peepID) => {
    const response = await savePeep(peepID);
    if (response?.error) {
        return response.error.message;
    }
    return response;
}