import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

SearchBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
export default function SearchBtn({ text, onClick }) {
  return (
    <Link to={'/search/:id'}>
      <button className="btn" onClick={onClick}>
        {text}
      </button>
    </Link>
  )
}
