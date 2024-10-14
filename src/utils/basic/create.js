import { join } from "path";
import { writeFile } from "node:fs/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const create = async (currentWorkingDirectory, args) => {
    try {
        const [fileName] = args;

        if (!fileName) {
            showErrorMessage(ErrorMessage.BASIC_OPERATION);

            return;
        }

        const filePathToCreate = join(currentWorkingDirectory, fileName);

        await writeFile(filePathToCreate, "", { flag: "wx" });
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
