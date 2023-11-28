const API_URL = {
  name: `https://restcountries.com/v3.1/name/`,
  all: `https://restcountries.com/v3.1/all/`,
  code: `https://restcountries.com/v3.1/alpha/`,
}

async function getCountry(key, urlType = 'name') {
  const response = await fetch(`${API_URL[urlType]}${key}`)

  if (response.status == 404)
    throw new Error(
      "Country you're looking for does not exist, It might be due to a typo, and make sure you're searching in english"
    )

  if (!response.ok) throw new Error('Something went wrong')
  const data = await response.json()
  return data
}
export { getCountry }
