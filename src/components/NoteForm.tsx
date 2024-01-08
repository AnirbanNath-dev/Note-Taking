import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"


function NoteForm() {

  const navigate= useNavigate()

  const handleSubmit = (e :FormEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    navigate('/')
    console.log('dfa')
    
  }

  return (
    <form className="w-full p-10 text-center flex flex-col gap-20 items-center">
      <div className="flex justify-center gap-16">
        <input 
        type="text" 
        className="border-2 border-[rgba(0,0,0,0.6)] p-2 rounded-lg text-2xl"
        required
        placeholder="Enter the title..." 
        />
        <input 
        type="text"
        className="border-2 border-[rgba(0,0,0,0.6)] p-2 rounded-lg text-2xl"
        placeholder="Tags..." 
        />


      </div>
      <textarea
      cols={50}
      rows={10}
      required
      placeholder="Enter the content here..."
      className="p-2 text-xl border-2 border-[rgba(0,0,0,0.6)] resize-none"
      ></textarea >
      <div className="flex gap-10">
        <button type="button" onSubmit={handleSubmit} className="py-2 px-4 text-xl border-[1px] bg-sky-500 rounded-lg active:scale-90 text-[rgba(0,0,0,0.8)]">Save</button>
        <Link to=".." className="py-2 px-4 text-xl border-[1px] bg-red-500 rounded-lg active:scale-90 text-[rgba(0,0,0,0.8)]">Delete</Link>
      </div>

    </form>
  )
}

export default NoteForm