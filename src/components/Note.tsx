import { useSelector } from "react-redux"
import NoteType from "../types/noteType"
function Note() {

  const notes = useSelector((state:NoteType[] )=> state)

  console.log(notes);
  
  return (
    <div className="p-4 rounded-lg border-2 border-black flex flex-col items-center">

      <h1>Title</h1>
      <p>lajsdkofjnasofdoaisjfdioasjsdufasjfdoas</p>
      <span>tags</span>


    </div>

  )
}

export default Note