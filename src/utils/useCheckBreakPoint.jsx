import { useEffect, useState } from 'react'

export function useCheckBreakPoint({
  breakpoint = 1280,
  condition = 'smaller than',
}) {
  if (typeof breakpoint !== 'number')
    throw new Error('Breakpoint must be a number')
  if (condition !== 'smaller than' && condition !== 'greater than')
    throw new Error('Condition must be smaller than or greater than')
  const cn =
    condition === 'smaller than'
      ? window.innerWidth < 1280
      : window.innerWidth > 1280

  let [isScreenSmall, setIsScreenSmall] = useState(cn)
  // This use effect will update the isScreenSmall each time user changes the screen width
  useEffect(() => {
    const onWindowResize = () => {
      setIsScreenSmall(
        condition === 'smaller than'
          ? window.innerWidth < 1280
          : window.innerWidth > 1280
      )
    }
    window.addEventListener('resize', onWindowResize)
    return function () {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [condition])

  return isScreenSmall
}
