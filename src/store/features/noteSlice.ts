import { createSlice , nanoid} from "@reduxjs/toolkit";

interface Note{
    id : string;
    title : string;
    body : string;
    tags : string[];
    createdAt : string;
}

const initialState : Note[]= [];

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers:{

    }
})

export const {} = noteSlice.actions

export default noteSlice.reducer

