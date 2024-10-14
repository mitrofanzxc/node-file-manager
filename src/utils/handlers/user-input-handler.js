import { cwd } from "node:process";

import { showErrorMessage } from "../show-error-message.js";
import { closeReadlinePromises } from "../close-readline-promises.js";
import { calcHash } from "../hash/calc-hash.js";
import { trimString } from "../trim-string.js";

import {
    ErrorMessage,
    OperationType,
    BasicOperation,
    NavigationOperation,
    ZipOperation,
} from "../../constants/index.js";

export const userInputHandler = async (input, readLinePromises) => {
    try {
        const [operationType, ...args] = trimString(input)?.split(/\s+/g);
        const currentWorkingDirectory = cwd();

        switch (operationType) {
            case OperationType.OS:
                console.log("=== OperationType.OS ===");
                break;
            case BasicOperation[operationType]:
                console.log("=== BASIC_OPERATIONS ===");
                break;
            case NavigationOperation[operationType]:
                console.log("=== NAVIGATION_OPERATIONS ===");
                break;
            case ZipOperation[operationType]:
                console.log("=== ZIP_OPERATIONS ===");
                break;
            case OperationType.HASH:
                await calcHash(args);
                break;
            case OperationType.EXIT:
                closeReadlinePromises(readLinePromises);
                break;
            default:
                showErrorMessage(ErrorMessage.INPUT);
        }
    } catch {
        showErrorMessage(ErrorMessage.INPUT);
    }
};
