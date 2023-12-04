import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../country-details/CountryCard'
import EmptyResult from '../../UI/EmptyResult'
import { setSelectedCountry } from '../../sotre'
import { useCheckBreakPoint } from '../../utils/useCheckBreakPoint'
import CountryButton from '../../UI/CountryButton'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function SearchPad({ countries = [] }) {
  const isResultEmpty = countries?.length == 0
  const dispatch = useDispatch()
  const { selectedCountry } = useSelector((cake) => cake.searchSlice)
  const isScreenSmall = useCheckBreakPoint({
    breakpoint: 1280,
    condition: 'smaller than',
  })
  const ref = useRef()

  return (
    <aside
      className={`p-0 pb-16 pt-6 bg-slate-600 bg-opacity-50 flex  gap-10 overflow-x-scroll items-center relative justify-center lg:justify-start   ${isResultEmpty && 'pt-36'
        }`}
      ref={ref}
    >
      {isResultEmpty && <EmptyResult />}
      <div className="flex gap-5 px-10 py-20 lg:py-0 flex-col lg:flex-row">
        {!isResultEmpty &&
          countries?.map((country) => {
            const isSelected = selectedCountry === country
            const btn = !isScreenSmall ? (
              <CountryButton
                style={`${isSelected && 'bg-red-600'}`}
                onClick={() => {
                  dispatch(setSelectedCountry(isSelected ? null : country))
                  if (isSelected) {
                    return
                  }
                }}
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
                key={country.name.common}
                countryName={country.name.common}
                otherNames={country.altSpellings}
                imgSrc={country.flags.png}
                styles={isSelected ? `border-red-500` : ''}
                parentRef={ref}
                btn={btn}
              />
            )
          })}
      </div>
    </aside>
  )
}
