export default function Loader({ styles }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-slate-950/30 backdrop-blur-xl z-50 ${styles}`}
    >
      <div className="loader"></div>
    </div>
  )
}
