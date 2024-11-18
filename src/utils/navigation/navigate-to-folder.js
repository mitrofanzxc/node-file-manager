import { normalize } from "path";
import { chdir } from "node:process";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const navigateToFolder = (args) => {
    try {
        const [destinationFolder] = args;
        const destinationFolderPath = normalize(destinationFolder);

        chdir(destinationFolderPath);
    } catch {
        showErrorMessage(ErrorMessage.NAVIGATION_OPERATION);
    }
};
