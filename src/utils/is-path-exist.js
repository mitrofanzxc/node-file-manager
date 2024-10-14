import { access } from "node:fs/promises";

import { showErrorMessage } from "./show-error-message.js";

export const isPathExist = async (path) => {
    try {
        await access(path);
    } catch {
        showErrorMessage();
    }
};
