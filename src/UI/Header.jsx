import Logo from './Logo'
import logo from '../assets/world-question.svg'
import SearchInput from '../features/search/SearchInput'
import SearchBtn from '../features/search/SearchBtn'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import BookMarkIcon from '../UI/BookmarkIcon'

export default function Header() {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate('')

  const handleSearch = function (e) {
    e.preventDefault()
    navigate(`/search/${searchText}`)
  }
  return (
    <header className="flex flex-col md:flex-row justify-center lg:justify-between px-2 py-2 lg:px-10 lg:py-5 fixed top-0 w-full backdrop-blur-2xl z-50 items-center lg:gap-7 gap-2 md:gap-0">
      <Link to={'/'}>
        <Logo
          icon={<img src={logo} alt="logo" className="w-8" />}
          title={<span className="hidden lg:inline-block">Country Query</span>}
        />
      </Link>
      <form
        className="flex w-full h-full justify-end gap-5 items-center"
        onSubmit={(e) => handleSearch(e)}
      >
        <SearchInput
          searchText={searchText}
          setSearchText={(e) => setSearchText(e.target.value)}
          placeholder={'You can search for a country here'}
        />
        <SearchBtn text={'Search'} />

        <Link to="/bookmarks">
          <BookMarkIcon />
        </Link>
      </form>
    </header>
  )
}

//flex justify-between px-3 py-2 lg:px-10 lg:py-5 fixed top-0 w-full  bg-opacity-30 backdrop-blur-2xl z-50
