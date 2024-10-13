import { showErrorMessage } from "./show-error-message.js";

export const closeReadlinePromises = (readlinePromises) => {
    try {
        readlinePromises.close();
    } catch {
        showErrorMessage();
    }
};
