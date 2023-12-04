import CustomGlobe from '../../UI/CustomGlobe'
import SelectionPad from './SelectionPad'

export default function ActiveCountry() {
  return (
    <section className="bg-star relative -z-50 flex-1 hidden xl:flex ">
      {/* <CustomGlobe className="absolute top-0" /> */}
      <SelectionPad />
    </section>
  )
}
