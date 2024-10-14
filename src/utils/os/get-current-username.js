import { argv } from "node:process";

import { trimString } from "../trim-string.js";

import { DEFAULT_USER_NAME, Separator } from "../../constants/index.js";

export const getCurrentUserName = () => {
    try {
        const userName = trimString(argv?.[2]) || DEFAULT_USER_NAME;

        return userName?.split(Separator.EQUAL)?.[1] || DEFAULT_USER_NAME;
    } catch {
        return DEFAULT_USER_NAME;
    }
};
