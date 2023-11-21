import { extractUnsplashInfo } from '../utils/extractUnsplashInfo'

const API_URL = `https://api.unsplash.com/search/photos?`
const API_KEY = `&client_id=g_zr227VsX87oFAbpnqH0pLWYitpwKms-T9v4BS--hs`
async function getCountryPhoto(countryName, number = 5) {
  if (!countryName) return
  const searchTerm = countryName?.toLowerCase()

  const response = await fetch(
    `${API_URL}query=${searchTerm}${API_KEY}&per_page=${number}`
  )

  if (response.status === 404)
    throw new Error(
      "Country you're looking for does not exist, It might be due to a typo, and make sure you're searching in english"
    )

  if (!response.ok) throw new Error('Something went wrong')
  const data = await response.json()
  const { results } = data
  console.log(extractUnsplashInfo(results))
  return results
}

export { getCountryPhoto }
