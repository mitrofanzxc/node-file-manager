import { showErrorMessage } from "./show-error-message.js";

import { ErrorMessage } from "../constants/index.js";

export const errorHandler = async (callback, errorMessage = ErrorMessage.OPERATION) => {
    try {
        await callback();
    } catch {
        showErrorMessage(errorMessage);
    }
};
