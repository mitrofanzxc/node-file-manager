export const ErrorMessage = {
    OPERATION: "Operation failed.",
    UNKNOWN: "Unknown error has occured.",
    INPUT: "Invalid input. Please check your cli command.",
    PATH: "Invalid path. Please check it.",
    FILE_NAME: "Invalid filename. Please check it.",
    DIR_NAME: "Invalid dirname. Please check it.",
    COPY: "Copy operation failed. Please check your arguments.",
    CREATE: "Create operation failed. Please check your arguments.",
    READ: "Create operation failed. Please check your arguments.",
    MOVE: "Create operation failed. Please check your arguments.",
    HASH_INPUT:
        "Hash invalid input. Please check your path to the file taking into account the current directory.",
    HASH_OPERATION:
        "Hash operation failed. Please check your path to the file taking into account the current directory.",
    COMPRESS: "Compress operation failed. Please check your arguments.",
    DECOMPRESS: "Decompress operation failed. Please check your arguments.",
    ZIP: "Zip operation failed. Please check your arguments.",
    BASIC: "Basic operation failed. Please check your arguments.",
    OS: "System operation failed. Please check your arguments.",
    NAVIGATION: "Navigation operation failed. Please check your arguments.",
};

export const DEFAULT_USER_NAME = "Username";
export const ALGORITHM = "sha256";
export const ENCODING = "hex";
export const GHZ = "GHz";

export const Color = {
    WHITE: "\u001b[37m",
    RESET: "\u001b[0m",
    GREEN: "\u001b[32m",
    RED: "\u001b[31m",
    YELLOW: "\u001b[33m",
    BLUE: "\u001b[34m",
    CYAN: "\u001b[36m",
};

export const Separator = {
    EQUAL: "=",
};

export const FileType = {
    FILE: "file",
    DIRECTORY: "directory",
};

export const OperationType = {
    OS: "os",
    HASH: "hash",
    EXIT: ".exit",
};

export const BasicOperation = {
    CAT: "cat",
    ADD: "add",
    RN: "rn",
    CP: "cp",
    MV: "mv",
    RM: "rm",
};

export const NavigationOperation = {
    UP: "up",
    CD: "cd",
    LS: "ls",
};

export const ZipOperation = {
    COMPRESS: "compress",
    DECOMPRESS: "decompress",
};
