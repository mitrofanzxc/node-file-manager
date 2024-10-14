import { navigateUp } from "../navigation/navigate-up.js";
import { navigateToFolder } from "../navigation/navigate-to-folder.js";
import { showFolderContent } from "../navigation/show-folder-content.js";
import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage, NavigationOperation } from "../../constants/index.js";

export const navigationHandler = async (operationType, args) => {
    try {
        const tempOperationType = operationType?.toLowerCase();

        switch (tempOperationType) {
            case NavigationOperation.up:
                navigateUp();
                break;
            case NavigationOperation.cd:
                navigateToFolder(args);
                break;
            case NavigationOperation.ls:
                await showFolderContent();
                break;
            default:
                showErrorMessage(ErrorMessage.INPUT);
                break;
        }
    } catch {
        showErrorMessage(ErrorMessage.NAVIGATION_OPERATION);
    }
};
