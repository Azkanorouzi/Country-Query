import CustomGlobe from '../../UI/CustomGlobe'
export default function ActiveCountry() {
  return (
    <section className="bg-star relative -z-50 flex-1 hidden lg:block py-10">
      <CustomGlobe className="absolute top-0" />
    </section>
  )
}
