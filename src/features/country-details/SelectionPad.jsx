import { useSelector } from 'react-redux'
import DetailSelectionBox from './detailSelectionBox'
import { extractCountryDetails } from '../../utils/extractCountryInfo'

export default function SelectionPad() {
  const selectedCountry = useSelector(
    (cake) => cake.searchSlice.selectedCountry
  )
  const searchResult = useSelector((cake) => cake.searchSlice.searchResult)
  const forMattedSelectedCountry =
    selectedCountry && extractCountryDetails(selectedCountry)

  return (
    <article className={`flex ${searchResult.length && 'flex-1'}`}>
      {selectedCountry && (
        <>
          <div className="flex-1"></div>
          <DetailSelectionBox
            TopComponent={
              <p className="text-3xl text-center">
                {forMattedSelectedCountry.name.common}
              </p>
            }
            BottomComponent={
              <p className="text-2xl p-2 text-center">
                lang:{' '}
                {Object.values(forMattedSelectedCountry.languages)
                  .slice(0, 3)
                  .join(', ')}
              </p>
            }
          />
          <DetailSelectionBox
            TopComponent={<img src={forMattedSelectedCountry.flag} />}
          />
          <DetailSelectionBox
            TopComponent={
              <p className="p-6 text-xl text-center">
                Population: {forMattedSelectedCountry.population}
              </p>
            }
            BottomComponent={
              <p className="p-6 text-xl text-center">
                Region: {forMattedSelectedCountry.region}
              </p>
            }
          />
          <div className="flex-1"></div>
        </>
      )}
      {!selectedCountry && searchResult.length > 0 && (
        <div className="w-full h-full bg-black grid place-content-center">
          <h2 className="text-3xl z-50">
            You can start by selecting a country after getting the search result
            ;)
          </h2>
        </div>
      )}
    </article>
  )
}
