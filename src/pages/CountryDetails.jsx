import { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { useFetcher } from 'react-router-dom'
import { extractCountryDetails } from '../utils/extractCountryInfo'
import { Slideshow } from '../UI/SlideShow'
import { getCountryPhoto } from '../services/unsplashApi'
import { extractUnsplashInfo } from '../utils/extractUnsplashInfo'
import InfoBox from '../UI/InfoBox'
import { useDispatch, useSelector } from 'react-redux'
import { addBookmarks, deleteBookmark } from '../sotre'

export default function CountryDetails() {
  const fetcher = useFetcher()
  const params = useParams()
  const dispatch = useDispatch()

  const bookmarks = useSelector(({ searchSlice }) => searchSlice.bookmarks)

  const targetCountry =
    fetcher?.data?.searchTermResult &&
    extractCountryDetails(fetcher?.data?.searchTermResult[0])
  const isBookmarked = bookmarks.some(
    (bookmark) =>
      bookmark?.name?.common === targetCountry?.name?.common ?? false
  )

  const images = useLoaderData()?.searchTermResult

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') {
      fetcher.load(`/search/${params.searchTerm}`)
    }
  }, [fetcher, params.searchTerm])

  const flagStyle = {
    backgroundImage: `url(${targetCountry?.flag})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }

  return (
    targetCountry && (
      <main
        className="flex flex-col w-screen h-screen justify-center items-center pt-10 pb-10"
        style={flagStyle}
      >
        <section className="p-5 bg-red-950 bg-opacity-50 backdrop-blur-lg flex text-white flex-col rounded-lg text-center gap-5 overflow-scroll h-[600px] mt-10 lg:w-[900px]">
          <div className="flex justify-between px-10 items-center content-center">
            <strong className="text-5xl ">{targetCountry?.name?.common}</strong>
            <button
              onClick={() => {
                isBookmarked
                  ? dispatch(deleteBookmark(targetCountry))
                  : dispatch(addBookmarks(targetCountry))
              }}
            >
              {isBookmarked ? (
                <i className="fa fa-bookmark text-4xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark text-4xl"></i>
              )}
            </button>
          </div>
          <div className="flex gap-3 justify-center flex-col items-center sm:flex-row">
            <Slideshow
              img1={images[0]}
              img2={images[1]}
              img3={images[2]}
              img4={images[3]}
              img5={images[4]}
            />
            <Slideshow
              img1={images[5]}
              img2={images[6]}
              img3={images[7]}
              img4={images[8]}
              img5={images[9]}
            />
          </div>
          <p>Alt spellings: {targetCountry?.altSpellings}</p>
          <InfoBox bgColor={'bg-red-950'} textColor={'text-white'}>
            <p>Capital: {targetCountry?.capital?.join(',')}</p>
            <p>Capital: {Object.values(targetCountry?.peopleName)}</p>
          </InfoBox>
          <InfoBox
            bgColor={'bg-black'}
            textColor={'text-white'}
            title={'Names'}
          >
            <p>{targetCountry?.name?.official}(Official)</p>
            <p>{targetCountry?.name?.common}(Common)</p>
          </InfoBox>
          <InfoBox
            bgColor={
              'bg-red-950 justify-center items-center gap-5 flex-col lg:flex-row'
            }
            textColor={'text-white'}
          >
            <img
              src={targetCountry?.flag}
              alt="Country flag"
              className="w-40 h-40 object-cover"
            />
            <p className="text-left">
              {targetCountry?.flagDesc ?? 'No Info for the flag'}
            </p>
          </InfoBox>
          <InfoBox
            bgColor={'bg-black justify-center items-center gap-5'}
            textColor={'text-white'}
            title={'Region'}
          >
            <p className="text-4xl">{targetCountry?.region}</p>
            <div></div>
            <div></div>
          </InfoBox>
          <InfoBox
            bgColor={'bg-red-950 justify-center items-center gap-5'}
            textColor={'text-white'}
            title={'Population'}
          >
            <p className="text-4xl">{targetCountry?.population}</p>
            <div></div>
            <div></div>
          </InfoBox>
          <InfoBox
            bgColor={'bg-black justify-center items-center gap-5'}
            textColor={'text-white'}
            title={'Map'}
          >
            <a
              className="text-xl text-red-400"
              href={targetCountry?.map}
              target="blank"
            >
              🌎 See on map
            </a>
            <div></div>
            <div></div>
          </InfoBox>
        </section>
      </main>
    )
  )
}
export async function loader({ params }) {
  try {
    // Getting the search term
    const searchTerm = params.searchTerm
    // Waiting for api to get back with the result
    const searchTermResult = await getCountryPhoto(searchTerm)
    return {
      searchTermResult: extractUnsplashInfo(searchTermResult),
      isErr: false,
      loaderDataError: '',
    }
  } catch (err) {
    return { searchTermResult: '', isErr: true, loaderDataError: err }
  }
}
