import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./features/noteSlice";

const store = configureStore({
    reducer : noteSlice
})

export default store