'use strict';
/**
 * Validates URL with a regular expression.
 * 
 * @param {string} url url to be validated.
 * @returns true if validation succeeds, otherwise false.
 */
export const validURL = ((url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
});
