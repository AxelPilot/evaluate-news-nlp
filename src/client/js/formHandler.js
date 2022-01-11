'use strict';
/**
 * Handles the form submit event.
 * Upon form submission, a URL or a piece of text is sent
 * via the post route '/str' to the server for natural 
 * language processing (NLP), using the MeaningCLoud API
 * @param {Object} event 
 */
export const handleSubmit = (event) => {
    event.preventDefault();

    try {
        let inputType;
        const radioButtons = document.querySelectorAll('input[name="inputRadio"]');
        radioButtons.forEach((radio, index) => {
            if (radio.checked) {
                inputType = radio.value;
            }

        });

        if (inputType == 'url') {
            const str = document.getElementById('inputURL').value;

            if (Client.validURL(str)) {
                Client.postData('/str', {
                    type: inputType,
                    str: str
                })
                    .then((res) => {
                        updateMcForm(res);
                    })    
            } else {
                alert('You have entered an invalid URL. Please try again.');
            }
        } else if (inputType == 'txt') {
            const str = document.getElementById('inputText').value;

            Client.postData('/str', {
                type: inputType,
                str: str
            })
                .then((res) => {
                    updateMcForm(res);
                })    
        }
    } catch(error) {
        console.log('Error', error);
    }
}

/**
 * Updates the html view with text analysis data returned
 * from the MeaningCloud API.
 * @param {*} res Response with data returned from the server.
 */
const updateMcForm = (res) => {
    document.getElementById('polarity').textContent = `Polarity: ${res.polarity}`;
    document.getElementById('subjectivity').textContent = `Subjectivity: ${res.subjectivity}`;
    document.getElementById('irony').textContent = `Irony: ${res.irony}`;
    document.getElementById('agreement').textContent = `Emotional Agreement: ${res.agreement}`;
    document.getElementById('confidence').textContent = `Confidence: ${res.confidence}`;
}
