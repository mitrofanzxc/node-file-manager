import { homedir } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const getHomeDirectory = () => {
    try {
        const homeDirectory = homedir();

        console.log(`Your home directory: ${homeDirectory}`);
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
