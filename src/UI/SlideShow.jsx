import { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'

export const Slideshow = ({ img1, img2, img3, img4, img5 }) => {
  const [index, setIndex] = useState(0)

  const slideImages = [
    {
      url: img1?.url,
      caption: img1?.desc ?? '',
    },
    {
      url: img2?.url,
      caption: img2?.desc ?? '',
    },
    {
      url: img3?.url,
      caption: img3?.desc ?? '',
    },
    {
      url: img4?.url,
      caption: img4?.desc ?? '',
    },
    {
      url: img5?.url,
      caption: img5?.desc ?? '',
    },
  ]
  const imgStyle = {
    backgroundImage: `url(${slideImages[index]?.url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  useEffect(() => {
    const callBack = () =>
      setIndex((i) => (i === slideImages.length - 1 ? 0 : i + 1))
    const interval = setInterval(callBack, 4000)
    return function () {
      clearInterval(interval)
    }
  }, [slideImages.length])

  return (
    <div
      className="slide-container h-60 w-60 md:h-80 md:w-80 lg:w-96 lg:h-96 rounded-lg border"
      style={imgStyle}
    ></div>
  )
}
