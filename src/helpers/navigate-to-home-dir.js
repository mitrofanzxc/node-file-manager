import { homedir } from "node:os";

import { ERROR_MESSAGE } from "../constants/index.js";

export const navigateToHomeDir = () => {
    try {
        console.log("=== navigateToHomeDir ===");
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
