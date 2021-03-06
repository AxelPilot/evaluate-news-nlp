'use strict';
const express = require('express');
const mcPostData = require('./mc-post-data');
const formatText = require('./format-text');
const formatPolarity = require('./format-polarity');

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

// Retrieve url/story from client and pass it to the MeaningCloud API.
app.post('/str', (req, res) => {
    mcPostData(req.body.type, req.body.str)
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

// Designate what port the app will listen to for incoming requests.
app.listen(process.env.PORT || 8081, () => {
    console.log('Listening on port 8081!');
});
