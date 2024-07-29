async function getCountriesData() {
    const url = "https://restcountries.com/v3.1/all"
    let res = await fetch(url)
    let data = await res.json()
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    console.log(data)
}

getCountriesData()