import { access } from "node:fs/promises";

export const isFileExist = async (path) => {
    try {
        await access(path);
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
