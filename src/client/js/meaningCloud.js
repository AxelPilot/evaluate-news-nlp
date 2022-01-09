export const meaningCloud = (type, str) => {
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
    let apiKey;

    // Retrieve API key from the server.
    fetch('/apiKeys')
        .then(res => res.json())
        .then((res) => {
            apiKey = res.meaningCloud_API_KEY;

            const formData = new FormData();
            formData.append('key', apiKey);
            formData.append('txt', str);
            formData.append('lang', 'en');  // 2-letter code, like en es fr ...
        
            const requestOptions = {
                method: 'POST',
                body: formData,
                redirect: 'follow'
            };
        
            const response = fetch(baseURL, requestOptions)
                .then(response => ({
                    status: response.status,
                    body: response.json()
                }))
                .then(({ status, body }) => console.log(status, body))
                .catch(error => console.log('error', error));
        })
        .catch(error => console.log('Error', error));
}





