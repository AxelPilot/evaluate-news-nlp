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

const updateMcForm = (res) => {
    document.getElementById('polarity').textContent = `Polarity: ${res.polarity}`;
    document.getElementById('subjectivity').textContent = `Subjectivity: ${res.subjectivity}`;
    document.getElementById('irony').textContent = `Irony: ${res.irony}`;
    document.getElementById('agreement').textContent = `Emotional agreement: ${res.agreement}`;
    document.getElementById('confidence').textContent = `Confidence: ${res.confidence}`;
}