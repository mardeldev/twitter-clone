import { getPeepData, registerUser, login, post, savePeep, getFavPeeps, getAllFavPeeps } from "./dataService.js";

export const getPeeps = async () => {
    const data = await getPeepData();
    if (data?.error) {
        return data.error.message;
    }
    return data;
}

export const getSavedPeeps = async () => {
    const response = await getFavPeeps();
    if (response?.error) {
        return response.error.message;
    }
    return response;
}

export const getAllSavedPeeps = async () => {
    const response = await getAllFavPeeps();
    if (response?.error) {
        return response.error.message;
    }
    return response;
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


export const saveAPeep = async (peepID, cookies) => {
    const response = await savePeep(peepID, cookies);
    if (response?.error) {
        return response.error.message;
    }
    return response;
}