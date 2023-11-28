import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../features/country-details/CountryCard'
import { extractCountryDetails } from '../utils/extractCountryInfo'
import { Link } from 'react-router-dom'
import CountryButton from '../UI/CountryButton'
import { deleteBookmark } from '../sotre'
export default function Bookmarks() {
  const bookmarks = useSelector((cake) => {
    return (
      cake?.searchSlice?.bookmarks ||
      extractCountryDetails(cake?.searchSlice?.bookmarks)
    )
  })
  const dispatch = useDispatch()
  console.log(bookmarks)
  return (
    <section className="w-screen h-screen grid place-content-center pt-16 ">
      <section className=" overflow-y-scroll h-full pb-20 p-5 rounded-xl">
        <h2 className="text-5xl pb-5 pt-6 text-center">
          {bookmarks.length
            ? 'Bookmarks'
            : 'You can add your bookmarks right here :)'}
        </h2>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarks.map((bookmark) => (
            <CountryCard
              imgSrc={bookmark.flag}
              key={bookmark.name.common}
              countryName={bookmark.name.common}
              otherNames={bookmark?.altSpellings}
              btn={
                <div className="flex">
                  <Link to={`/detailed-search/${bookmark?.name?.common}`}>
                    <CountryButton style="btn bg-red-600">
                      See details
                    </CountryButton>
                  </Link>
                  <button
                    className="btn p-2 bg-red-900"
                    onClick={() => dispatch(deleteBookmark(bookmark))}
                  >
                    remove
                  </button>
                </div>
              }
            />
          ))}
        </article>
      </section>
    </section>
  )
}
