import { join } from "path";
import { rm } from "node:fs/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const deleteFile = async (currentWorkingDirectory, args) => {
    try {
        const [fileNameToDelete] = args;
        const filePathToDelete = join(currentWorkingDirectory, fileNameToDelete);

        await rm(filePathToDelete);
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
