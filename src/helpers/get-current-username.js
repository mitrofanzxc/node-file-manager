import { argv } from "node:process";

import { DEFAULT_USER_NAME, Separator } from "../constants/index.js";

export const getCurrentUserName = () => {
    try {
        const userName = argv?.[2]?.trim() || DEFAULT_USER_NAME;

        return userName?.split(Separator.EQUAL)?.[1] || DEFAULT_USER_NAME;
    } catch {
        return DEFAULT_USER_NAME;
    }
};
