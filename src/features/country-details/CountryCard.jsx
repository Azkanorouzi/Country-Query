import { useRef, useState } from 'react'
import Loader from '../../UI/Loader'

export default function CountryCard({
  imgSrc = 'https://flagcdn.com/w320/ir.png',
  countryName = 'Iran',
  otherNames = [],
  btn,
  styles,
}) {
  const [isLoading, setIsLoading] = useState(true)
  const loaderRef = useRef(null)

  const handleImageLoad = () => {
    setIsLoading(false)
  }
  return (
    <div
      className={`card w-56 lg:w-64 bg-base-100 shadow-xl mb-5 lg:mb-0 border ${styles}`}
    >
      <figure className="px-10 pt-10 relative">
        <img
          src={imgSrc}
          alt="Shoes"
          className="rounded-xl lg:h-24 h-20"
          onLoad={handleImageLoad}
          ref={loaderRef}
        />
        {isLoading && <Loader />}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{countryName}</h2>
        <p>Other names: {otherNames.slice(0, 2).join(', ')}</p>
        <div className="card-actions">{btn}</div>
      </div>
    </div>
  )
}
