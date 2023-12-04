import { useRef, useState } from 'react'
import Loader from '../../UI/Loader'
import { motion, useInView } from 'framer-motion'
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
    <motion.div
      className={`card bg-slate-400 w-56 lg:w-64 dark:bg-base-100 shadow-xl mb-5 lg:mb-0 border ${styles} `}
      initial={{ filter: 'blur(40px)', opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1 }}
      viewport={{ amount: 1 }}
    >
      <figure className="px-5 pt-5 relative">
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
        <p>Abbreviation: {otherNames.slice(0, 1).join(', ')}</p>
        <div className="card-actions">{btn}</div>
      </div>
    </motion.div>
  )
}
