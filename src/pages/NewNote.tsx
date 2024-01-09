import { TbNotes } from "react-icons/tb";
import NoteForm from '../components/NoteForm';


function NewNote() {

  return (
    <div className="w-screen p-10 my-20 flex flex-col items-center">
      <div className='flex gap-3 items-center'>
        <TbNotes className="text-5xl text-green-600" />
        <h1 className="text-3xl tracking-widest uppercase font-bold">Create a New Note</h1>
        <TbNotes className="text-5xl text-green-600" />
        
      </div>

      <NoteForm />


    </div>
  )
}

export default NewNote