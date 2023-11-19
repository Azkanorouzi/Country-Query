import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../country-details/CountryCard'
import EmptyResult from '../../UI/EmptyResult'
import { setSelectedCountry } from '../../sotre'
import { useCheckBreakPoint } from '../../utils/useCheckBreakPoint'
import CountryButton from '../../UI/CountryButton'
import { Link } from 'react-router-dom'

export default function SearchPad({ countries = [] }) {
  const isResultEmpty = countries?.length == 0
  const dispatch = useDispatch()
  const { selectedCountry } = useSelector((cake) => cake.searchSlice)
  const isScreenSmall = useCheckBreakPoint({
    breakpoint: 1280,
    condition: 'smaller than',
  })

  return (
    <aside
      className={`p-0 flex-1 bg-slate-600 bg-opacity-50 backdrop-blur-md flex  gap-10 overflow-x-scroll items-center relative justify-center`}
    >
      {isResultEmpty && <EmptyResult />}
      <div className="flex gap-5 px-10 py-20 lg:py-0 flex-col lg:flex-row ">
        {!isResultEmpty &&
          countries?.map((country) => {
            const isSelected = selectedCountry === country
            const btn = !isScreenSmall ? (
              <CountryButton
                style={`${isSelected && 'bg-red-600'}`}
                onClick={() =>
                  dispatch(setSelectedCountry(isSelected ? null : country))
                }
              >
                {isSelected ? 'De-select' : 'Select'}
              </CountryButton>
            ) : (
              <Link to={`/detailed-search/${country.name.common}`}>
                <CountryButton style="btn bg-red-600">
                  See details
                </CountryButton>
              </Link>
            )
            return (
              <CountryCard
                key={country.population}
                countryName={country.name.common}
                otherNames={country.altSpellings}
                imgSrc={country.flags.png}
                styles={isSelected ? `border-red-500` : ''}
                btn={btn}
              />
            )
          })}
      </div>
    </aside>
  )
}
