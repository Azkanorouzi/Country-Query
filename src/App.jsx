import AppLayout from './UI/AppLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import CountryQuery from './pages/CountryQuery'
import CountryDetails from './pages/CountryDetails'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <CountryQuery />,
      },
      {
        path: '/search/:searchTerm',
        element: <CountryQuery />,
      },
      {
        path: '/detailed-search/:searchTerm',
        element: <CountryDetails />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
