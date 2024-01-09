import NoteProps from "../types/noteProps"

function Note({ title,  body , tags  } : NoteProps) {


  
  return (
    <div className="p-4 rounded-lg gap-10 border-2 border-[rgba(0,0,0,0.5)] flex flex-col items-center " >

      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-xl font-light">{body}</p>
      <div className="flex flex-wrap gap-3">

        {
          tags.map((tag , index)=>(
            <span key={index} className="py-2 px-4 rounded-md bg-sky-500">{tag.trim()}</span>
          ))
        }

      </div>
        

    </div>

  )
}

export default Note