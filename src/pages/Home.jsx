import CustomGlobe from '../UI/CustomGlobe'
import Title from '../UI/Title'

export default function Home() {
  return (
    <main className="bg-star w-screen h-screen flex items-center gap-20 flex-col pt-20">
      <div>
        <Title />
      </div>
      <CustomGlobe></CustomGlobe>
    </main>
  )
}
