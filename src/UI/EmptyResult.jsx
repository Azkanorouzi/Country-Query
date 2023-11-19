import { Link } from 'react-router-dom'

export default function EmptyResult() {
  return (
    <div className="w-full h-full grid place-content-center  mb-40 gap-5">
      <h2 className="text-2xl">
        Hey friend you can start searching, using the search bar on the navbar
        :)
      </h2>
      <div className="flex justify-center gap-10">
        <Link className="text-red-600">See your country details &rarr;</Link>
        <Link className="text-red-600">See All &rarr;</Link>
      </div>
    </div>
  )
}
