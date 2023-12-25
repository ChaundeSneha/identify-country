const currenciesToCountries = {
    "USD": ["United States","Capital:Washington D.C."],
    "EUR": ["Eurozone","Capital:Brussels"],
    "GBP": ["United Kingdom", "Falkland Islands","Capital:London"],
    "JPY": ['Japan',"Capital:Tokyo"],
    "AUD": ['Australia',"Capital:Canberra"],
    "CAD": ['Canada',"Capital:Ottawa"],
    "INR": ['India',"capital:Delhi"],
    "CNY": ['China',"Capital:Beijing"],
    "BRL": ['Brazil',"Capital:Brasilia"],
    "ZAR": ['South Africa',"Capital:Cape Town, Pretoria, Bloemfontein"],
    "CHF": ['Switzerland',"Capital:Bern"],

    // ... add more currencies and associated countries as needed
};

function search() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    let countries = currenciesToCountries[input];

    const resultsDiv = document.getElementById("results");


    if (countries && countries.length > 0) {
        let output = `<p>Countries using ${input}:</p>`;
        output += "<ul>";
        countries.forEach(country => {
            output += `<li>${country}</li>`;
        });
        output += "</ul>";
        resultsDiv.innerHTML = output;
    } else {
        resultsDiv.innerHTML = "<p>No countries found for the entered currency.</p>";
    }
}
