import { DEFAULT_USER_NAME, SEPARATOR } from "../constants/index.js";

export const getCurrentUserName = (userName) => {
    try {
        if (!userName) {
            return DEFAULT_USER_NAME;
        }

        return userName.split(SEPARATOR.Equal)[1] || DEFAULT_USER_NAME;
    } catch {
        return DEFAULT_USER_NAME;
    }
};
