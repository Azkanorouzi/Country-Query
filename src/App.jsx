import AppLayout from './UI/AppLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import CountryQuery, { loader as searchLoader } from './pages/CountryQuery'
import CountryDetails from './pages/CountryDetails'
import { Provider } from 'react-redux'
import store from './sotre'
import Bookmarks from './pages/Bookmarks'
import './services/countryApi'
import PageNotFound from './UI/PageNotFound'

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
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
