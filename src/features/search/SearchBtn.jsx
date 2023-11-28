import PropTypes from 'prop-types'

SearchBtn.propTypes = {
  text: PropTypes.string.isRequired,
}
export default function SearchBtn({ text }) {
  return (
    <button className="lg:btn px-2 py-1 bg-slate-800 rounded-full">
      {text}
    </button>
  )
}
