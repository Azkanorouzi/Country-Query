export default function ErrorMessage({ error }) {
  return (
    <dialog className="modal bg-black z-50 bg-opacity-50 backdrop-blur-lg" open>
      <div className="modal-box">
        <h3 className="font-bold text-xl text-red-600">Error!</h3>
        <p className="py-4 text-lg">{error.message}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
