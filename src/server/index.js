const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const retrieveData = require('./retrieve-data');
const postData = require('./post-data');
const formatText = require('./formatText');
const formatPolarity = require('./formatPolarity');

dotenv.config();
apiKeys = {
    meaningCloud_API_KEY: process.env.meaningCloud_API_KEY,
    newsAPI_KEY: process.env.newsAPI_KEY,
    owm_API_KEY: process.env.owm_API_KEY
}

const app = express();
app.use(express.static('dist'));

// Dependencies
const bodyParser = require('body-parser');
// Middleware
// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance.
const cors = require('cors');
app.use(cors());

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile('/dist/index.html', { root: __dirname + '/../..' });
})

app.get('/apiKeys', (req, res) => {
    res.send(apiKeys);
});

// Retrieve story from client.
app.post('/url', (req, res) => {
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
    retrieveData(`${baseURL}?key=${apiKeys.meaningCloud_API_KEY}&of=json&url=${req.body.url}&lang=en`)
        .then((data) => {
            res.send({
                polarity: formatPolarity(data.score_tag),
                subjectivity: formatText(data.subjectivity),
                irony: formatText(data.irony),
                agreement: formatText(data.agreement),
                confidence: formatText(data.confidence)
            });
        })
        .catch(error => console.log('Error', error));
});

// Designate what port the app will listen to for incoming requests
app.listen(8081, () => {
    console.log('Listening on port 8081!');
});
