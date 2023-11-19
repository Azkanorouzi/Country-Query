import PropTypes from 'prop-types'

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}
export default function SearchInput({
  searchText,
  setSearchText,
  placeholder,
}) {
  return (
    <input
      type="text"
      className={`input flex-1 h-7 lg:h-9  bg-black`}
      value={searchText}
      placeholder={placeholder}
      onChange={(e) => {
        setSearchText(e)
      }}
    />
  )
}
