export const trimString = (string = "") => {
    try {
        if (!string) {
            return "";
        }

        return string?.toString()?.trim()?.toLowerCase() || "";
    } catch {
        return string;
    }
};
