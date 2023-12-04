import Globe from 'react-globe.gl'
import { } from 'react-globe.gl'
import PropTypes from 'prop-types'

CustomGlobe.propType = {
  width: PropTypes.number,
  height: PropTypes.number,
  absolute: PropTypes.string,
}
export default function CustomGlobe({ className = 'absolute' }) {
  return (
    <div className={className}>
      <Globe
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        animateIn={true}
      />
    </div>
  )
}
