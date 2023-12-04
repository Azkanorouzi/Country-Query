import { useSelector } from 'react-redux'
import DetailSelectionBox from './detailSelectionBox'
import { extractCountryDetails } from '../../utils/extractCountryInfo'
import { motion } from 'framer-motion'

export default function SelectionPad() {
  const selectedCountry = useSelector(
    (cake) => cake.searchSlice.selectedCountry
  )
  const searchResult = useSelector((cake) => cake.searchSlice.searchResult)
  const forMattedSelectedCountry =
    selectedCountry && extractCountryDetails(selectedCountry)


  return (
    <article className={`flex ${searchResult.length && 'flex-1'}`} key={Math.random('')}>
      {selectedCountry && (
        <>
          <div className="flex-1"></div>
          <DetailSelectionBox
            TopComponent={
              <motion.p className="text-3xl text-center" initial={{ translateX: -10, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }}>
                {forMattedSelectedCountry.name.common}
              </motion.p>
            }
            BottomComponent={
              <motion.p className="text-2xl p-2 text-center" initial={{ translateX: -10, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }}>
                lang:{' '}
                {Object.values(forMattedSelectedCountry.languages)
                  .slice(0, 3)
                  .join(', ')}
              </motion.p>
            }
          />
          <DetailSelectionBox
            TopComponent={<motion.img src={forMattedSelectedCountry.flag} alt={forMattedSelectedCountry.name.common} initial={{ scale: 0 }} animate={{ scale: 1 }} />}
          />
          <DetailSelectionBox
            TopComponent={
              <motion.p className="p-6 text-xl text-center" initial={{ translateX: 10, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }}>
                Population: {forMattedSelectedCountry.population}
              </motion.p>
            }
            BottomComponent={
              <motion.p className="p-6 text-xl text-center" initial={{ translateX: 10, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }}>
                Region: {forMattedSelectedCountry.region}
              </motion.p>
            }
          />
          <div className="flex-1"></div>
        </>
      )}
      {!selectedCountry && searchResult.length > 0 && (
        <div className="w-full h-full bg-black grid place-content-center">
          <h2 className="text-3xl z-50 text-cyan-500 dark:text-stone-700">
            You can start by selecting a country after getting the search result
            ;)
          </h2>
        </div>
      )}
    </article>
  )
}
