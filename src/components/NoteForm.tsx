import { useState } from "react"
import { useNavigate } from "react-router-dom"


function NoteForm() {

  const [content , setContent] = useState<string>('')
  const [title , setTitle] = useState<string>('')
  const [tags , setTags] = useState<string[]>([])

  const navigate= useNavigate()

  const handleSave = ():void => {
    
    if((content.trim().length !== 0) && (title.trim().length !==0)){

      

      navigate('/')
    }
    else{

    }
    
  }

  return (
    <div className="w-full p-10 text-center flex flex-col gap-20 items-center">
      <div className="flex justify-center gap-16">
        <input 
        type="text" 
        className="border-2 border-[rgba(0,0,0,0.6)] p-2 rounded-lg text-2xl"
        placeholder="Enter the title..." 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
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
      placeholder="Enter the content here..."
      className="p-2 text-xl border-2 border-[rgba(0,0,0,0.6)] resize-none"
      value={content}
      onChange={(e)=> setContent(e.target.value)}
      ></textarea >
      <div className="flex gap-10">
        <button onClick={handleSave} className="py-2 px-4 text-xl border-[1px] bg-sky-500 rounded-lg active:scale-90 text-[rgba(0,0,0,0.8)]">Save</button>
        <button className="py-2 px-4 text-xl border-[1px] bg-red-500 rounded-lg active:scale-90 text-[rgba(0,0,0,0.8)]">Delete</button>
      </div>

    </div>
  )
}

export default NoteForm