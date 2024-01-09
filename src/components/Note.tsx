import NoteProps from "../types/noteProps"

function Note({ title,  body , tags  } : NoteProps) {

  
  return (
    <div className="p-4 rounded-lg border-2 border-black flex flex-col items-center">

      <h1>{title}</h1>
      <p>{body}</p>
      <span>{tags}</span>
        

    </div>

  )
}

export default Note