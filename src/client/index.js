'use strict';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/results.scss';
import './styles/header.scss';

import { postData } from './js/postData';
import { validURL } from './js/validURL';
import { radioButtonListener } from './js/radioButtons';
import { handleSubmit } from './js/formHandler';

export {
    postData,
    validURL,
    radioButtonListener,
    handleSubmit,
}
