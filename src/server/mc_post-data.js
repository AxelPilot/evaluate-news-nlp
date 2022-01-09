/**
 * 
 * @param {string} url API url.
 * @param {string} type Either 'url' or 'txt'.
 * @param {string} str 
 * @returns {string} 
 */
module.exports = async function mcPostData(type, str) {
    const url = 'https://api.meaningcloud.com/sentiment-2.1';
    const dotenv = require('dotenv');
    const fetch = require('node-fetch');
    let FormData = require('form-data');
    dotenv.config();
    apiKey = process.env.API_KEY;
    
    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append(type, str);
    formData.append('lang', 'en');  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    const response = await fetch(url, requestOptions);

    try {
        return await response.json();
    } catch (error) {
        console.log('Error', error);
    }
};
