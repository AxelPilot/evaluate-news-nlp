export const validURL = ((url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
});

