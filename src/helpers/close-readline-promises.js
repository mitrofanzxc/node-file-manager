import { ERROR_MESSAGE } from "../constants/index.js";

export const closeReadlinePromises = (readlinePromises) => {
    try {
        readlinePromises.close();
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
