import { cpus } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage, GHZ } from "../../constants/index.js";

export const getCpusInfo = () => {
    try {
        const cpusInfo = cpus().map(({ model, speed }) => ({
            model,
            speed: `${(speed / 1000).toFixed(2)}${GHZ}`,
        }));

        console.table(cpusInfo);
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
