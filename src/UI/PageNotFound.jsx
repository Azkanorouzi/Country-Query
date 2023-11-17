import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <main className="grid place-content-center bg-star h-screen text-center gap-6">
      <h1 className="text-8xl"> 404</h1>
      <h2 className="text-3xl">
        {' '}
        Hey friend :) are you lost in the space? you can get back by clicking
        the link below
      </h2>
      <Link to={'/'}>
        <button className="btn">Get back</button>
      </Link>
    </main>
  )
}
