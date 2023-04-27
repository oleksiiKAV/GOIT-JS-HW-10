import { clearList } from './helpers.js'
import { showCountry } from './helpers.js'

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

Notiflix.Notify.init({
    width: '280px',
    position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '100px',
    opacity: 1,
    borderRadius: '3px',
    clickToClose: true,
})

export function getCountries() {
    const search = document.querySelector('#search-box').value
    // console.log(search)
    //https://restcountries.com/v3.1/name/sw?fields=name.official,capital,population,flags.svg,languages
    const searchFilter = '?fields=name,capital,population,flags,languages'
    fetch(`https://restcountries.com/v3.1/name/${search}${searchFilter}`, {
        method: "GET",
    })
        .then((response) => {
            if (response.status === 404) {
                throw new Error(`Go to catch`)
            }
            return response.json();
        })
        .then((data) => {

            if (data.length <= 10) {
                clearList()
                data.forEach(api => {
                    showCountry(api, data.length)
                })
            }
            if (data.length > 10) {
                clearList()
                Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`)
            }

        })
        .catch(err => {
            clearList()
            Notiflix.Notify.failure(`Oops, there is no country with that name.`)
            console.log(err);
        })
}