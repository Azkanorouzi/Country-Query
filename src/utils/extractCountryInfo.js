export function extractCountryDetails(selectedCountry) {
  const {
    altSpellings,
    borders,
    capital,
    capitalInfo: { latlng },
    demonyms: { eng: peopleName },
    fifa,
    flags: { alt: flagDesc, svg: flag },
    languages,
    maps: { googleMaps: map },
    name,
    population,
    region,
  } = selectedCountry
  return {
    altSpellings,
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
