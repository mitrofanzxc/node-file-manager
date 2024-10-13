import { DEFAULT_USER_NAME, Separator } from "../constants/index.js";

export const getCurrentUserName = (userName) => {
    try {
        if (!userName) {
            return DEFAULT_USER_NAME;
        }

        return userName.split(Separator.EQUAL)[1] || DEFAULT_USER_NAME;
    } catch {
        return DEFAULT_USER_NAME;
    }
};
