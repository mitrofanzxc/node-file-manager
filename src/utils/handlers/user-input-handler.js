import { cwd } from "node:process";

import { showErrorMessage } from "../show-error-message.js";
import { closeReadlinePromises } from "../close-readline-promises.js";
import { calcHash } from "../hash/calc-hash.js";
import { trimString } from "../trim-string.js";
import { navigationHandler } from "./navigation-handler.js";

import {
    ErrorMessage,
    OperationType,
    BasicOperation,
    NavigationOperation,
    ZipOperation,
} from "../../constants/index.js";

export const userInputHandler = async (input, readLinePromises) => {
    try {
        const [tempOperationType, ...args] = trimString(input)?.split(/\s+/g);
        const operationType = tempOperationType?.toLowerCase();
        const currentWorkingDirectory = cwd();

        switch (operationType) {
            case OperationType.os:
                console.log("=== OperationType.OS ===");
                break;
            case BasicOperation[operationType]:
                console.log("=== BASIC_OPERATIONS ===");
                break;
            case NavigationOperation[operationType]:
                await navigationHandler(operationType, args);
                break;
            case ZipOperation[operationType]:
                console.log("=== ZIP_OPERATIONS ===");
                break;
            case OperationType.hash:
                await calcHash(args);
                break;
            case OperationType.exit:
                closeReadlinePromises(readLinePromises);
                break;
            default:
                showErrorMessage(ErrorMessage.INPUT);
                break;
        }
    } catch {
        showErrorMessage(ErrorMessage.INPUT);
    }
};
