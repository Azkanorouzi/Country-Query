export default function CountryCard({
  imgSrc = 'https://flagcdn.com/w320/ir.png',
  countryName = 'Iran',
  btnText = 'Select',
  otherNames = [
    'IR',
    'Islamic Republic of Iran',
    'Iran, Islamic Republic of',
    'Jomhuri-ye Eslāmi-ye Irān',
  ],
}) {
  return (
    <div className="card lg:w-64 bg-base-100 shadow-xl mb-5 lg:mb-0">
      <figure className="px-10 pt-10">
        <img src={imgSrc} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{countryName}</h2>
        <p>Other names: {otherNames.slice(0, 2).join(', ')}</p>
        <div className="card-actions">
          <button className="btn bg-red-950">{btnText}</button>
        </div>
      </div>
    </div>
  )
}
