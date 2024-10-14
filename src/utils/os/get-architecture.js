import { arch } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const getArchitecture = () => {
    try {
        const cpuArchitecture = arch();

        console.log(`Your CPU architecture: ${cpuArchitecture}`);
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
