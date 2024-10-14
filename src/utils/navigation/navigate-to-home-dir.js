import { chdir } from "node:process";
import { homedir } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const navigateToHomeDir = () => {
    try {
        chdir(homedir());
    } catch {
        showErrorMessage(ErrorMessage.NAVIGATION_OPERATION);
    }
};
