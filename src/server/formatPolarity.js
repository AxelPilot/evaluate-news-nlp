module.exports = function formatPolarity (polarity) {
    switch(polarity) {
        case 'P+':
            return 'Strong Positive';
            break;
        case 'P':
            return 'Positive';
            break;
        case 'NEU':
            return 'Neutral';
            break;
        case 'N':
            return 'Negative';
            break;
        case 'N+':
            return 'Strong Negative';
            break;
        case 'NONE':
            return 'Without Polarity';
    }    
}