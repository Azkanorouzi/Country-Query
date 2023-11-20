export default function DetailSelectionBox({
  TopComponent = false,
  BottomComponent = false,
}) {
  return (
    <section className="flex flex-1  flex-col">
      {TopComponent && (
        <div className=" flex-1 py-6 grid place-content-center">
          {TopComponent}
        </div>
      )}
      {BottomComponent && (
        <div className=" flex-1 py-6 place-content-center">
          {BottomComponent}
        </div>
      )}
    </section>
  )
}
