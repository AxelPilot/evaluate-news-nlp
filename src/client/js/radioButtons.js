'use strict';
/**
 * Toggles between a single-line input field where the user can enter a URL,
 * and a multi-line textarea where the user can enter a piece of text.
 */
export const radioButtonListener = () => {
    const radios = document.getElementsByName('inputRadio');

    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (index == 1) {
                document.getElementById('inputURL').style.display = 'none';
                document.getElementById('inputText').style.display = 'block';
            } else if (index == 0) {
                document.getElementById('inputText').style.display = 'none';
                document.getElementById('inputURL').style.display = 'block';
            }
        });
    });
};
radioButtonListener();
