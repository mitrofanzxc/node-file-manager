import { EOL } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

export const getEol = () => {
    try {
        const eolInfo = JSON.stringify(EOL);

        console.log(eolInfo);
    } catch {
        showErrorMessage();
    }
};
