'use strict';
const url = 'https://api.meaningcloud.com/sentiment-2.1';
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const FormData = require('form-data');
dotenv.config();

/**
 * Sends a POST request to the Meaning Cloud API
 * @param {string} url API url.
 * @param {string} type Either 'url' or 'txt'. Determines
 * whether a url or a piece of text should be sent to the
 * Meaning Cloud API.
 * @param {string} str Either a url or a piece of text to be
 * sent to the Meaning Cloud API for sentiment analysis.
 * @returns A JSON object with analysis data returned from
 * the Meaning CLoud API.
 */
module.exports = async function mcPostData(type, str) {
    
    const formData = new FormData();
    formData.append('key', process.env.API_KEY);
    formData.append(type, str);
    formData.append('lang', 'en');  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    }

    const response = await fetch(url, requestOptions);

    try {
        return await response.json();
    } catch (error) {
        console.log('Error', error);
    }
}
