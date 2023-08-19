import { getPeepData } from "./dataService.js";

export const getData = async () => {
    const data = await getPeepData();
    if (data?.error) {
        return data.error.message;
    }
    return data;

}