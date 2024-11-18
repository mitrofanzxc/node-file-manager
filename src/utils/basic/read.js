import { join } from "path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const read = async (currentWorkingDirectory, args) => {
    try {
        const [fileNameToRead] = args;
        const filePathToRead = join(currentWorkingDirectory, fileNameToRead);

        const fileData = await new Promise((resolve, reject) => {
            let readStream = createReadStream(filePathToRead, "utf8");
            let chunk = "";

            readStream.on("data", (data) => {
                chunk = chunk + data;
            });

            readStream.on("close", () => {
                resolve(chunk);
            });

            readStream.on("error", (error) => {
                reject(error);
            });
        });

        stdout.write(fileData);
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
