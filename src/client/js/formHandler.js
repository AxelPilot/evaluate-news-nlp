export const handleSubmit = (event) => {
    event.preventDefault();

    try {
        const url = document.getElementById('url').value;

        if (Client.validURL(url)) {
            Client.postData('/url', {
                url: url
            })
                .then((res) => {
                    document.getElementById('polarity').textContent = `Polarity: ${res.polarity}`;
                    document.getElementById('subjectivity').textContent = `Subjectivity: ${res.subjectivity}`;
                    document.getElementById('irony').textContent = `Irony: ${res.irony}`;
                    document.getElementById('agreement').textContent = `Emotional agreement: ${res.agreement}`;
                    document.getElementById('confidence').textContent = `Confidence: ${res.confidence}`;
                })    
        } else {
            alert('You have entered an invalid URL. Please try again.');
        }
    } catch(error) {
        console.log('Error', error);
    }
}
