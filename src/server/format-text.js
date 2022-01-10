/**
 * Converts uppercase text to lowercase with a capital first letter.
 * @param {string} text Text to be formatted.
 * @returns Lowercase string with a capital first letter.
 */
module.exports = function formatText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}