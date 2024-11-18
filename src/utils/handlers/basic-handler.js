import { showErrorMessage } from "../show-error-message.js";
import { read } from "../basic/read.js";
import { create } from "../basic/create.js";
import { rename } from "../basic/rename.js";
import { copyFile } from "../basic/copy-file.js";
import { moveFile } from "../basic/move-file.js";
import { deleteFile } from "../basic/delete-file.js";

import { BasicOperation, ErrorMessage } from "../../constants/index.js";

export const basicHandler = async (operationType, args, currentWorkingDirectory) => {
    try {
        const tempOperationType = operationType?.toLowerCase();

        switch (tempOperationType) {
            case BasicOperation.cat:
                await read(currentWorkingDirectory, args);
                break;
            case BasicOperation.add:
                await create(currentWorkingDirectory, args);
                break;
            case BasicOperation.rn:
                await rename(currentWorkingDirectory, args);
                break;
            case BasicOperation.cp:
                await copyFile(currentWorkingDirectory, args);
                break;
            case BasicOperation.mv:
                await moveFile(currentWorkingDirectory, args);
                break;
            case BasicOperation.rm:
                await deleteFile(currentWorkingDirectory, args);
                break;
            default:
                showErrorMessage(ErrorMessage.BASIC_INPUT);
                break;
        }
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
