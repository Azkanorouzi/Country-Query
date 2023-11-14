import ActiveCountry from '../features/search/ActiveCountry'
import SearchPad from '../features/search/SearchPad'
export default function CountryQuery() {
  return (
    <main className="flex flex-col lg:pt-28 justify-end min-h-screen">
      <ActiveCountry />
      <SearchPad />
    </main>
  )
}
export function loader() {
  console.log('loader')
  return 'something'
}
