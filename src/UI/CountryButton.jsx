export default function CountryButton({ onClick, style, children }) {
  return (
    <button onClick={onClick} className={`btn bg-cyan-500 dark:bg-red-950 ${style}`}>
      {children}
    </button>
  )
}
