export function extractCountryDetails(selectedCountry) {
  const {
    altSpelling,
    borders,
    capital,
    capitalInfo: { latlng },
    demonyms: { eng: peopleName },
    fifa,
    flags: { alt: flagDesc, png: flag },
    languages,
    maps: { googleMaps: map },
    name,
    population,
    region,
  } = selectedCountry
  return {
    altSpelling,
    borders,
    capital,
    latlng,
    peopleName,
    fifa,
    flagDesc,
    flag,
    languages,
    map,
    name,
    population,
    region,
  }
}
