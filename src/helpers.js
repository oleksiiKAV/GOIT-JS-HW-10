const outputList = document.querySelector(".country-list");

export function clearList() {

    if (outputList.firstElementChild) {
        const li = document.querySelectorAll('li');
        // debugger
        for (let i = 0; i < li.length; i++) {
            l = li[i];
            l.remove();
        }
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
        <h3>Capital: >${data.capital}</h3>
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