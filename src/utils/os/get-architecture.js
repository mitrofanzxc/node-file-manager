import { arch } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const getArchitecture = () => {
    try {
        console.log(arch());
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
