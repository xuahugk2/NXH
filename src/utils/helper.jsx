export const serializeParameters = (obj) => {
    return `?${new URLSearchParams(obj).toString()}`;
};
