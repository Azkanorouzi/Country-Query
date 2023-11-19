import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './sotre'
import './services/countryApi'
import { Suspense, lazy } from 'react'
import Loader from './UI/Loader'

import { loader as searchLoader } from './pages/CountryQuery'
const PageNotFound = lazy(() => import('./UI/PageNotFound'))
const Bookmarks = lazy(() => import('./pages/Bookmarks'))
const CountryQuery = lazy(() => import('./pages/CountryQuery'))
const CountryDetails = lazy(() => import('./pages/CountryDetails'))
const Home = lazy(() => import('./pages/Home'))
const AppLayout = lazy(() => import('./UI/AppLayout'))

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/',
        element: <CountryQuery err={false} />,
        errorElement: <CountryQuery err={true} />,
      },
      {
        path: '/search/:searchTerm',
        element: <CountryQuery err={false} />,
        errorElement: <CountryQuery err={true} />,
        loader: searchLoader,
      },
      {
        path: '/detailed-search/:searchTerm',
        element: <CountryDetails err={false} />,
        errorElement: <CountryDetails err={true} />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
])
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </Provider>
  )
}

export default App
