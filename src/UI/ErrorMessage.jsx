import { useParams } from 'react-router'

export default function ErrorMessage({ error }) {
  const { searchTerm } = useParams()
  return (
    <dialog className="modal bg-black z-50 bg-opacity-50 backdrop-blur-lg" open>
      <div className="modal-box">
        <h3 className="font-bold text-xl text-red-600">Error!</h3>
        <h2 className="text-yellow-400">
          {searchTerm.trim('').length > 0 &&
            `No result found for "${searchTerm}"`}
        </h2>
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
