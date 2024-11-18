import { userInfo } from "node:os";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage, DEFAULT_USER_NAME } from "../../constants/index.js";

export const getOsUserName = () => {
    try {
        const userName = userInfo()?.username || DEFAULT_USER_NAME;

        console.log(`User name: ${userName}`);
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
