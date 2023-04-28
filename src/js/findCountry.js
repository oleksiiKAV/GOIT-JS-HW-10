import debounce from 'lodash/debounce';

import { fetchCountries } from './fetchCountries.js'
import { clearList, infoSys } from './helpers.js'

const DEBOUNCE_DELAY = 500; //300;

const textInput = document.querySelector("#search-box");
infoSys(1)
textInput.addEventListener("input", debounce(
    () => {
        const search = textInput.value.trim()
        if (!search) {
            clearList();
            infoSys(1)
        }
        else {
            fetchCountries(search);
        }
    },
    DEBOUNCE_DELAY, //1300,
));
