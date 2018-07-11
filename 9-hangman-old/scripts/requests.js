const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
}

// Create a new function called getCurrentCountry
// Should return a promise that resolves the country object for your current location
// Use async/await for the new function

const getCurrentCountry = async () => {
    // const location = await getLocation();
    // const country = await getCountry(location.country);
    // return country;

    const location = await getLocation();
    return getCountry(location.country);
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch the country');
    }
}


const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=4cf9307feeb14b');

    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch the country');
    }
}