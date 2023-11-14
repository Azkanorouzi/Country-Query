import CountryCard from '../../UI/CountryCard'

export default function SearchPad() {
  return (
    <aside className="p-0 flex-1 bg-slate-600 bg-opacity-70 backdrop-blur-md flex  gap-10 overflow-x-scroll items-center ">
      <div className="flex gap-5 px-10 py-20 lg:py-0 flex-col lg:flex-row">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </aside>
  )
}
