import { normalize } from "path";
import { chdir } from "node:process";

import { ErrorMessage } from "../../constants/index.js";

export const navigateToFolder = (args) => {
    try {
        const [destinationFolder] = args;
        const destinationFolderPath = normalize(destinationFolder);

        chdir(destinationFolderPath);
    } catch {
        printErrorText(ErrorMessage.NAVIGATION_OPERATION);
    }
};
