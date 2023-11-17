import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router'
import Loader from './Loader'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
