import debounce from 'lodash/debounce';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

import { getCountries } from './countryAPI'
import { clearList } from './helpers.js'

const DEBOUNCE_DELAY = 300;

// Notiflix.Notify.init({
//     width: '280px',
//     position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
//     distance: '100px',
//     opacity: 1,
//     borderRadius: '3px',
//     clickToClose: true,
// })

const textInput = document.querySelector("#search-box");


textInput.addEventListener("input", debounce(
    () => {
        if (!textInput.value.trim()) {
            clearList();
            Notiflix.Notify.warning(`Please enter a country name.`)
        }
        else { getCountries(); }
    },
    // DEBOUNCE_DELAY,
    1300,
));
