import { copyFile } from "./copy-file.js";
import { deleteFile } from "./delete-file.js";
import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const moveFile = async (currentWorkingDirectory, args) => {
    try {
        await copyFile(currentWorkingDirectory, args);
        await deleteFile(currentWorkingDirectory, args);
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
