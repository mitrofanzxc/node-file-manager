import { cwd } from "node:process";

import { errorHandler } from "./error-handler.js";
import { showErrorMessage } from "./show-error-message.js";
import { closeReadlinePromises } from "./close-readline-promises.js";

import { ErrorMessage, OperationType } from "../constants/index.js";

export const userInputHandler = errorHandler(async (input, readLinePromises) => {
    const [operationType, ...args] = input.trim().split(/\s+/g);
    const currentWorkingDirectory = cwd();

    switch (operationType) {
        case OperationType.OS:
            console.log("=== OperationType.OS ===");
            break;
        case BASIC_OPERATIONS[operationType]:
            console.log("=== BASIC_OPERATIONS ===");
            break;
        case NAVIGATION_OPERATIONS[operationType]:
            console.log("=== NAVIGATION_OPERATIONS ===");
            break;
        case ZIP_OPERATIONS[operationType]:
            console.log("=== ZIP_OPERATIONS ===");
            break;
        case OperationType.HASH:
            console.log("=== HASH ===");
            break;
        case OperationType.EXIT:
            console.log("=== EXIT ===");
            closeReadlinePromises(readLinePromises);
            break;
        default:
            showErrorMessage(ErrorMessage.INPUT);
    }
}, ErrorMessage.INPUT);
