import { showErrorMessage } from "../show-error-message.js";
import { getArchitecture } from "../os/get-architecture.js";
import { getCpusInfo } from "../os/get-cpus-info.js";
import { getOsUserName } from "../os/get-os-username.js";
import { getEol } from "../os/get-eol.js";
import { getHomeDirectory } from "../os/get-home-directory.js";

import { ErrorMessage } from "../../constants/index.js";

export const osHandler = async (args) => {
    try {
        const [tempFlag] = args || [];
        const flag = tempFlag?.toLowerCase();

        switch (flag) {
            case "--eol":
                getEol();
                break;
            case "--cpus":
                getCpusInfo();
                break;
            case "--homedir":
                getHomeDirectory();
                break;
            case "--username":
                getOsUserName();
                break;
            case "--architecture":
                getArchitecture();
                break;
            default:
                showErrorMessage(ErrorMessage.OS_INPUT);
                break;
        }
    } catch {
        showErrorMessage(ErrorMessage.OS_OPERATION);
    }
};
