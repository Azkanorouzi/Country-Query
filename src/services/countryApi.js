const apiKey = `https://restcountries.com/v3.1/name/`

async function getCountry(key) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${key}`)
  if (!response.ok) throw new Error('Something went wrong')
  const data = await response.json()
  console.log(data)
}
getCountry('iran')
export { getCountry }
