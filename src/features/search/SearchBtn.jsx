import PropTypes from 'prop-types'

SearchBtn.propTypes = {
  text: PropTypes.string.isRequired,
}
export default function SearchBtn({ text }) {
  return <button className="btn">{text}</button>
}
