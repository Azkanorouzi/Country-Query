import { RouterProvider, createBrowserRouter, useOutlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './sotre'
import './services/countryApi'
import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './UI/Loader'

import { loader as searchLoader } from './pages/CountryQuery'
import { loader as imageLoader } from './pages/CountryDetails'
import CountryDetailsPage from './pages/CountryDetailsPage'
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
        loader: imageLoader,
      },
      {
        path: '/detailed-search/',
        element: <CountryDetailsPage err={false} />,
        errorElement: <CountryDetailsPage err={true} />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
])

function App() {
  useEffect(() => {
    localStorage.getItem('bookmarks') ||
      localStorage.setItem('bookmarks', JSON.stringify([]))
  }, [])
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <RouterProvider router={router}></RouterProvider>
        </AnimatePresence>
      </Suspense>
    </Provider>
  )
}

export default App
