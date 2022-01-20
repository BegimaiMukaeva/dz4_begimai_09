let search = document.getElementById('search')

let cName = document.getElementById('name'),
    regionHtml = document.getElementById('region'),
    subregionHtml = document.getElementById('subregion'),
    capitalHtml = document.getElementById('capital'),
    flagHtml = document.getElementById('flag'),
    flagsImg = document.getElementById('flags')

search.addEventListener('keyup', (e) => {
    let countryName = e.target.value
    if (countryName.length >= 3) {
        console.log('sddd')
        fetchCountry(countryName)
    }
})

function fetchCountry(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data))
}

function renderCountry(data) {
    console.log(data[0])
    const {altSpellings, region, subregion, capital, flag, flags} = data[0]
    cName.innerHTML = altSpellings[2]
    regionHtml.innerText = region
    subregionHtml.innerText = subregion
    capitalHtml.innerText = capital
    flagHtml.innerText = flag
    flagsImg.src = flags.svg
}

//2 hw

const tbody = document.getElementById("tbody")
    fetch('https://restcountries.com/v3.1/all').then((data) => {
        console.log(data)
        data.json().then(response => {
            console.log(response,'-hhg')
            response.forEach(element => {
                const all = document.createElement("tr")
                all.setAttribute("id", "all")
                tbody.append(all)

                const code = document.createElement("td")
                code.setAttribute("id", "code")
                code.innerText = element.cca2
                all.append(code)

                const flag = document.createElement("img")
                flag.style.width ='50px'
                flag.setAttribute("src", element.flags.svg)
                flag.style.height = "50px"
                all.append(flag)

                const name = document.createElement("td")
                name.setAttribute("id", "name")
                name.innerText = element.name["common"]
                all.append(name)

                const capital = document.createElement("td")
                capital.setAttribute("id", "capital")
                capital.innerText = element.capital
                all.append(capital)

                const population = document.createElement("td")
                population.setAttribute("id", "population")
                population.innerText = element.population
                all.append(population)

            })
        })
    })