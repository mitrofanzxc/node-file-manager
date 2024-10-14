import { homedir } from "node:os";

import { ErrorMessage } from "../../constants/index.js";

import { showErrorMessage } from "../show-error-message.js";

export const navigateToHomeDir = () => {
    try {
        console.log("=== navigateToHomeDir ===");
    } catch {
        showErrorMessage(ErrorMessage.NAVIGATION_OPERATION);
    }
};
