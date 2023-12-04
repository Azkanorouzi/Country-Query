import { getCountry } from '../services/countryApi'
import SearchPad from '../features/search/SearchPad'
import ActiveCountry from '../features/country-details/ActiveCountry'
import ErrorMessage from '../UI/ErrorMessage'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router'
import store, { setSearchTermResult } from '../sotre'
import { useSelector } from 'react-redux'
import CountryButton from '../UI/CountryButton'

CountryQuery.propTypes = {
  err: PropTypes.bool,
}

export default function CountryQuery({ err }) {
  const data = useLoaderData()
  const selectedCountry = useSelector(
    (cake) => cake.searchSlice.selectedCountry
  )
  const { searchTerm } = useParams();
  const navigation = useNavigation()
  const navigate = useNavigate()
  const targetCountry = data?.searchTermResult?.find && data?.searchTermResult?.find(country => country?.name?.common?.toLowerCase() === searchTerm?.toLowerCase())

  let errMessage = ''

  if (err) {
    errMessage = <ErrorMessage error={err} key={Math.random()} />
  }
  if (data?.isErr) {
    errMessage = (
      <ErrorMessage error={data?.loaderDataError} key={Math.random()} />
    )
  }
  if (navigation.state === 'loading') {
    errMessage = ''
  }

  return (
    <main className="flex flex-col lg:pt-28 justify-end min-h-screen relative">
      {errMessage}
      <ActiveCountry />
      {selectedCountry && (
        <CountryButton
          style={'border dark:border-red-600 rounded-none'}
          onClick={() =>
            navigate(`/detailed-search/${selectedCountry.name.common}`)
          }
        >
          See more
        </CountryButton>
      )}
      <SearchPad countries={targetCountry ? [targetCountry] : data?.searchTermResult} />
    </main>
  )
}
export async function loader({ params }) {
  try {
    // Getting the search term
    const searchTerm = params.searchTerm
    // Waiting for api to get back with the result
    const searchTermResult = await getCountry(searchTerm)

    store.dispatch(setSearchTermResult(searchTermResult))
    return { searchTermResult, isErr: false, loaderDataError: '' }
  } catch (err) {
    store.dispatch(setSearchTermResult([]))
    return { searchTermResult: '', isErr: true, loaderDataError: err }
  }
}
