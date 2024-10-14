import { cwd } from "node:process";

import { showErrorMessage } from "../show-error-message.js";
import { closeReadlinePromises } from "../close-readline-promises.js";
import { calcHash } from "../hash/calc-hash.js";
import { trimString } from "../trim-string.js";
import { navigationHandler } from "./navigation-handler.js";
import { zipHandler } from "./zip-handler.js";
import { basicHandler } from "./basic-handler.js";
import { osHandler } from "./os-handler.js";

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
                osHandler(args);
                break;
            case BasicOperation[operationType]:
                basicHandler(operationType, args, currentWorkingDirectory);
                break;
            case NavigationOperation[operationType]:
                await navigationHandler(operationType, args, currentWorkingDirectory);
                break;
            case ZipOperation[operationType]:
                zipHandler(operationType, args);
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
