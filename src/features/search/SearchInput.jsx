import PropTypes from 'prop-types'

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
}
export default function SearchInput({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className="input flex-1 h-7 lg:h-9"
      value={searchText}
      onChange={setSearchText}
    />
  )
}
