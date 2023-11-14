import PropTypes from 'prop-types'

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
}
export default function SearchInput({
  searchText,
  setSearchText,
  onChange,
  placeholder,
}) {
  return (
    <input
      type="text"
      className={`input flex-1 h-7 lg:h-9 ${onChange && 'bg-black'}`}
      value={searchText}
      placeholder={placeholder}
      onChange={(e) => {
        setSearchText(e)
        if (onChange) onChange()
      }}
    />
  )
}
