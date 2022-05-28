export const convertToHours = (minutes: number) => {
    let result = minutes < 0 ? Math.ceil(minutes / 60) : Math.floor(minutes / 60);
    return result;
}

export const convertDiffToStr = (result: number, actualResult: number) => {
    let value = convertToHours(actualResult * 60 - result);
    return value < 0 ? value + "h" : "+" +  value + "h";
}