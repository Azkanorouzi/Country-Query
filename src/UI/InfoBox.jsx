export default function InfoBox({ children, title, bgColor, textColor }) {
  return (
    <div
      className={`p-5 rounded-lg flex justify-between ${bgColor} ${textColor} bg-opacity-50 `}
    >
      {title && <strong> {title}: </strong>}
      {children}
    </div>
  )
}
