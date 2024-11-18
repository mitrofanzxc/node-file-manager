import { readdir } from "node:fs/promises";
import { cwd } from "node:process";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage, FileType } from "../../constants/index.js";

export const showFolderContent = async () => {
    try {
        const currentWorkingDirectory = cwd();
        const files = await readdir(currentWorkingDirectory, { withFileTypes: true });

        const result = files
            .slice()
            .sort((first, second) => {
                if (first.isFile() && !second.isFile()) {
                    return 1;
                }

                if (!first.isFile() && second.isFile()) {
                    return -1;
                }

                return first.name.localeCompare(second.name);
            })
            .map((file) => ({
                Name: file.name,
                Type: file.isFile() ? FileType.FILE : FileType.DIRECTORY,
            }));

        console.table(result);
    } catch {
        showErrorMessage(ErrorMessage.NAVIGATION_OPERATION);
    }
};
