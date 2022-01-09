const fetch = require('node-fetch');

/**
 * Retrieve data from the server.
 * @param {string} url 
 * @returns data retrieved from the server.
 */
 module.exports = async function retrieveData (url = '') {
    const res = await fetch(url);
    try {
        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}
