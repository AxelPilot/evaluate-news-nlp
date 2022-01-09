export const radioButtonListener = () => {
    const radios = document.mcForm.inputRadio;

    radios.forEach((radio, i) => {
        radio.addEventListener('change', () => {
            if (i == 1) {
                document.getElementById('inputURL').style.display = 'none';
                document.getElementById('inputText').style.display = 'block';
            } else if (i == 0) {
                document.getElementById('inputText').style.display = 'none';
                document.getElementById('inputURL').style.display = 'block';
            }
        });
    });
}
radioButtonListener();
