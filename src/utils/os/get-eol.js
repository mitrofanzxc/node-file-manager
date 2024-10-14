import { EOL } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const getEol = () => {
    try {
        const eolInfo = JSON.stringify(EOL);

        console.log(eolInfo);
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
