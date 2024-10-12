import { ERROR_MESSAGE } from "../constants";

export const closeReadlinePromises = (readlinePromises) => {
    try {
        readlinePromises.close();
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
