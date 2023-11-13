export default function Logo({ title, icon }) {
  return (
    <div className="flex items-center">
      {icon}
      <h1
        className="text-lg lg:text-3xl menu-title py-4 px-2"
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </h1>
    </div>
  )
}
