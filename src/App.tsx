import { Navigate, Route, Routes } from "react-router-dom"
import NewNote from "./pages/NewNote"
import Notes from "./pages/Notes"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Notes/>} />
      <Route path="/new" element={<NewNote/>} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>}/>
        <Route path="edit" element={<h1>Edit</h1>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
