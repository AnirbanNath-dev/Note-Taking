import Note from "../components/Note"


function Notes() {
  return (
    <div className="w-screen p-10 my-20 flex flex-col items-center">

        <div className="flex gap-3 items-center py-4 border-b-4 border-gray-500 w-full justify-center">
          <h1 className="text-3xl tracking-widest uppercase font-light hover:tracking-normal transition-all duration-500 cursor-pointer">Notes</h1>
        </div>

      <Note/>
        

    </div>
  )
}

export default Notes