import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const basicHandler = async (operationType, args, currentWorkingDirectory) => {
    try {
        const tempOperationType = operationType?.toLowerCase();
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
