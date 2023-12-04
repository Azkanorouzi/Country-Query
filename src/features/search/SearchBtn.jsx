import PropTypes from 'prop-types'

SearchBtn.propTypes = {
  text: PropTypes.string.isRequired,
}
export default function SearchBtn({ text }) {
  return (
    <button className="lg:btn px-2 py-1  rounded-full dark:bg-slate-800 bg-red-600">
      {text}
    </button>
  )
}
