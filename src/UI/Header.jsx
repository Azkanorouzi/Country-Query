import Logo from './Logo'
import logo from '../assets/world-question.svg'
import SearchInput from '../features/search/SearchInput'
import SearchBtn from '../features/search/SearchBtn'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSearchTerm } from '../sotre'
import { useNavigate } from 'react-router'

export default function Header() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate('')

  const handleSearch = function (e) {
    e.preventDefault()
    // dispatch(setSearchTerm(searchText))
    navigate(`/search/${searchText}`)
  }

  return (
    <header className="flex justify-center lg:justify-between px-2 py-2 lg:px-10 lg:py-5 fixed top-0 w-full backdrop-blur-2xl z-50 items-center lg:gap-2">
      <Logo
        icon={<img src={logo} alt="logo" className="w-8" />}
        title={<span className="hidden lg:inline-block">Country Query</span>}
      />
      <form
        className="flex w-full h-full justify-end gap-5 items-center"
        onSubmit={(e) => handleSearch(e)}
      >
        <div></div>
        <SearchInput
          searchText={searchText}
          setSearchText={(e) => setSearchText(e.target.value)}
        />
        <SearchBtn text={'Search'} />
      </form>
    </header>
  )
}

//flex justify-between px-3 py-2 lg:px-10 lg:py-5 fixed top-0 w-full  bg-opacity-30 backdrop-blur-2xl z-50
