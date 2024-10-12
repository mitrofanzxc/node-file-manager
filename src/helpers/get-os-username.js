import { userInfo } from "node:os";

import { ERROR_MESSAGE } from "../constants/index.js";

export const getOsUserName = () => {
    try {
        const userName = userInfo().username;

        console.log(userName);
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
