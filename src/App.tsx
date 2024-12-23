import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import User from "./pages/User/User"



function App() {

 

  return (
   <>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path=":id" element={<User/>}/>
   </Routes>
   </>
  )
}

export default App