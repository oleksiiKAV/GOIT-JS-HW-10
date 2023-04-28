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

// 0-info, 1-warn, 2-err
export function infoSys(level) {
    switch (level) {
        case 0:
            Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`)
            break;
        case 1:
            Notiflix.Notify.warning(`Please enter a country name.`)
            break;
        case 2:
            Notiflix.Notify.failure(`Oops, there is no country with that name.`)
            break;
        default:
            break;
    }
}

export function clearList() {
    const outputList = document.querySelector(".country-list");
    document.querySelector('.country-info').innerHTML = ""
    if (outputList.firstElementChild) {
        outputList.innerHTML = ""
    }
}

export function showCountry(data, length) {
    document.querySelector(".country-list").style.listStyle = "None";
    const countries = document.querySelector('.country-list')

    const country = document.createElement('li')
    const details = document.querySelector('.country-info')
    country.classList.add('country')

    if (length === 1) {

        const values = Object.values(data.languages);
        const str = values.join(', ');

        country.innerHTML =
            `        
        <img class="country-img" width="42" height="32"
            src="${data?.flags?.svg}"
        </img>
        <h2 class="countryName">${data?.name?.official}</h2>
        `
        details.innerHTML = `<div class="country-info">
        <h3>Capital: ${data.capital}</h3>
        <h3>Population: ${data.population}</h3>
        <h3> Language: ${str}</h3>
        </div>
        `
    }
    else if (length > 1 && length <= 10) {
        country.innerHTML =
            `        
                <img class="country-img" width="42" height="32"
                    src="${data?.flags?.svg}"
                </img>
                <h2 class="countryName">${data?.name?.official}</h2>
                `
        details.innerHTML = ""
    }

    country.style.display = 'flex';
    country.style.justifyContent = 'flex-start';
    country.style.alignItems = 'center';
    country.style.gap = '10px';

    countries.appendChild(country)
}