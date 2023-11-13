import Globe from 'react-globe.gl'
import {} from 'react-globe.gl'

export default function CustomGlobe() {
  return (
    <div className="animate-rotate absolute">
      <Globe
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        animateIn={true}
      />
    </div>
  )
}
