import { clearList, showCountry, infoSys } from './helpers.js'

export function fetchCountries(search) {
    //https://restcountries.com/v3.1/name/sw?fields=name.official,capital,population,flags.svg,languages
    const searchFilter = '?fields=name,capital,population,flags,languages'
    const apiURL = `https://restcountries.com/v3.1/`
    const apiAction = `name/`
    const apiContext = search.concat(searchFilter)
    const apiFull = apiURL.concat(apiAction, apiContext)
    // fetch(`https://restcountries.com/v3.1/name/${search}${searchFilter}`, {
    fetch(apiFull, {
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
                infoSys(0)
            }
        })
        .catch(err => {
            clearList()
            infoSys(2)
            console.log(err);
        })
}