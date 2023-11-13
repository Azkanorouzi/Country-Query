import Logo from './Logo'
import logo from '../assets/world-question.svg'
import SearchInput from './SearchInput'
import BookMarkIcon from './BookmarkIcon'

export default function Header() {
  return (
    <header className="flex justify-center lg:justify-between px-2 py-2 lg:px-10 lg:py-5 fixed top-0 w-full backdrop-blur-2xl z-50 items-center lg:gap-2">
      <Logo
        icon={<img src={logo} alt="logo" className="w-8" />}
        title={<span className="hidden lg:inline-block">Country Query</span>}
      />
      <SearchInput />
      <BookMarkIcon />
    </header>
  )
}
//flex justify-between px-3 py-2 lg:px-10 lg:py-5 fixed top-0 w-full  bg-opacity-30 backdrop-blur-2xl z-50
