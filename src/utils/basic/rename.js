import { join } from "path";
import { rename } from "node:fs/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const rename = async (currentWorkingDirectory, args) => {
    try {
        const [filePathToRename, newFileName] = args;
        const fileToRenamePath = join(currentWorkingDirectory, filePathToRename);
        const properFileNamePath = join(currentWorkingDirectory, newFileName);

        await rename(fileToRenamePath, properFileNamePath);
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
