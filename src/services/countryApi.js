const API_URL = {
  name: `https://restcountries.com/v3.1/name/`,
}

async function getCountry(key) {
  const response = await fetch(`${API_URL.name}${key}`)

  if (response.status === 404)
    throw new Error(
      "Country you're looking for does not exist, It might be due to a typo, and make sure you're searching in english"
    )

  if (!response.ok) throw new Error('Something went wrong')
  const data = await response.json()
  return data
}
export { getCountry }
