import { userInfo } from "node:os";

import { DEFAULT_USER_NAME } from "../../constants/index.js";

export const getOsUserName = () => {
    try {
        const userName = userInfo()?.username || DEFAULT_USER_NAME;

        return userName;
    } catch {
        return DEFAULT_USER_NAME;
    }
};
