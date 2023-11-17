import { getCountry } from '../services/countryApi'
import SearchPad from '../features/search/SearchPad'
import ActiveCountry from '../features/search/ActiveCountry'
import ErrorMessage from '../UI/ErrorMessage'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router'

CountryQuery.propTypes = {
  err: PropTypes.bool,
}
export default function CountryQuery({ err }) {
  const loaderData = useLoaderData()

  return (
    <main className="flex flex-col lg:pt-28 justify-end min-h-screen relative">
      {err && <ErrorMessage error={err} key={Math.random()} />}
      {loaderData?.isErr && (
        <ErrorMessage error={loaderData.error} key={Math.random()} />
      )}
      <ActiveCountry />
      <SearchPad />
    </main>
  )
}
export async function loader({ params }) {
  try {
    // Getting the search term
    const searchTerm = params.searchTerm
    // Waiting for api to get back with the result
    const searchTermResult = await getCountry(searchTerm)
    console.log(searchTermResult, 'asfdsf')
    return { searchTermResult, isErr: false, errMessage: '' }
  } catch (err) {
    return { searchTermResult: '', isErr: true, error: err }
  }
}
