// api requests
const API_BASE = "https://restcountries.com/v3.1";

const $countrySelector = document.getElementById("country-selector");
const $countryInformation = document.getElementById("country-information");
console.log($countryInformation);
async function getAllCountriesNames() {
  const response = await fetch(`${API_BASE}/all?fields=name`);
  return await response.json();
}

async function getCountryByName(officialName) {
  const response = await fetch(
    `${API_BASE}/name/${officialName}?fullText=true`
  );
  const countryInformation = await response.json();
  return countryInformation[0];
}

fetch(`${API_BASE}/all`)
  .then((resp) => resp.json())
  .then((countries) => {
    return countries.map((country) => country.timezones);
  })
  .then(console.log);

populateCountrySelector();

async function populateCountrySelector() {
  const countries = await getAllCountriesNames();

  $countrySelector.innerHTML = countries
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    .map(
      ({ name: { common, official } }) =>
        `<option value="${official}">${common}</option>`
    )
    .join("");

  const selected = countries[Math.floor(Math.random() * countries.length)];
  $countrySelector.value = selected.name.official;
  onchange();
}

const onchange = async () => {
  const countryInfo = await getCountryByName($countrySelector.value);
  console.log(countryInfo);
  $countryInformation.innerHTML = ` <div class="card w-100">
<img
  src="${countryInfo.flags.svg}"
  class="card-img-top"
  alt="${
    countryInfo.flags.svg ? countryInfo.flags.svg : countryInfo.name.common
  } flag"
/>

<ul class="list-group list-group-flush">
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-clock"></i>
    <span class="fw-bold">Timezone: </span>
    <span class="flex-fill text-center fontMobile">${countryInfo.timezones.join(
      ", "
    )}</span>
  </li>
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-people-fill"></i>
    <span class="fw-bold">Population: </span>
    <span class="flex-fill text-center fontMobile">${new Intl.NumberFormat().format(
      countryInfo.population
    )}</span>
  </li>
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-building"></i>
    <span class="fw-bold">Capital: </span>
    <span class="flex-fill text-center fontMobile">${
      countryInfo.capital?.join(", ") ?? "No Capital"
    }</span>
  </li>
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-geo-fill"></i>
    <span class="fw-bold">Area: </span>
    <span class="flex-fill text-center fontMobile">
      ${new Intl.NumberFormat().format(countryInfo.area)} m<sup>2</sup>
    </span>
  </li>
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-translate"></i>
    <span class="fw-bold">Languages: </span>
    <span class="flex-fill text-center fontMobile">${
      countryInfo.languages
        ? Object.values(countryInfo.languages).join(", ")
        : "No official languages"
    }</span>
  </li>
  <li class="list-group-item d-flex">
    <i class="me-2 bi bi-cash-coin"></i>
    <span class="fw-bold">Currencies: </span>
    <span class="flex-fill text-center fontMobile">
   ${
     countryInfo.currencies
       ? Object.values(countryInfo.currencies)
           .map((idx) => idx.name + " " + idx.symbol)
           .join(", ")
       : "No official currency"
   }
    </span>
  </li>
</ul>
</div>`;
};
$countrySelector.addEventListener("change", onchange);

//  check if countries dosent have area currencies

// fetch("https://restcountries.com/v3.1/all")
//   .then((r) => r.json())
//   .then((d) => {
//     console.log(d.filter(c=>!c.area || !c.currencies))
//   });
