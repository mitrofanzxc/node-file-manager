import { ERROR_MESSAGE } from "../constants/index.js";

export const errorHandler = async (callback, errorMessage = ERROR_MESSAGE) => {
    try {
        await callback();
    } catch {
        console.error(errorMessage);
    }
};
