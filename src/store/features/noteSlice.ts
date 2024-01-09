import { createSlice , nanoid} from "@reduxjs/toolkit";
import Note from "../../types/noteType";

const initialState : Note[]= [];

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers:{
        addNote : (state , actions) : void=>{

            const note:Note = {
                id : nanoid(),
                title : actions.payload,
                body : actions.payload,
                tags : actions.payload,
                createdAt : new Date()
            } 

            state.push(note);
            console.log(state)
        },
        deleteNote : (state , actions) =>{
            const { id } = actions.payload;
            state = state.filter(note => note.id !== id)
        },
        editNote : (state , actions) =>{
        
        }
    }
})

export const { addNote , deleteNote , editNote} = noteSlice.actions

export default noteSlice.reducer

