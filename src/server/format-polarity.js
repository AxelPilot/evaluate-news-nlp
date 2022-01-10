/**
 * Interprets the 'score_tag' property returned from 
 * the Meaning Cloud API.
 * @param {string} polarity the 'score_tag' property 
 * returned from the Meaning Cloud API.
 * @returns a string of text corresponding with the
 * 'score_tag' property.
 */
module.exports = function formatPolarity (score_tag) {
    switch(score_tag) {
        case 'P+': return 'Strong Positive';
        case 'P': return 'Positive';
        case 'NEU': return 'Neutral';
        case 'N': return 'Negative';
        case 'N+': return 'Strong Negative';
        case 'NONE': return 'Without Polarity';
    }    
}