import { ERROR_MESSAGE } from "../constants/index.js";

export const showGreeting = (userName) => {
    try {
        console.log(`Welcome to the File Manager, ${userName}!`);
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
