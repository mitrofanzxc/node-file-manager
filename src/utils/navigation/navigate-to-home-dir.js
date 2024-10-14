import { homedir } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

export const navigateToHomeDir = () => {
    try {
        console.log("=== navigateToHomeDir ===");
    } catch {
        showErrorMessage();
    }
};
