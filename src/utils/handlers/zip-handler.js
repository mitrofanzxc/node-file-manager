import { showErrorMessage } from "../show-error-message.js";
import { compress } from "../zip/compress.js";
import { decompress } from "../zip/decompress.js";

import { ErrorMessage, ZipOperation } from "../../constants/index.js";

export const zipHandler = async (operationType, args) => {
    try {
        const tempOperationType = operationType?.toLowerCase();

        switch (tempOperationType) {
            case ZipOperation.compress:
                await compress(zipOperationArguments);
                break;
            case ZipOperation.decompress:
                await decompress(zipOperationArguments);
                break;
            default:
                showErrorMessage(ErrorMessage.ZIP_INPUT);
                break;
        }
    } catch {
        showErrorMessage(ErrorMessage.ZIP_OPERATION);
    }
};
