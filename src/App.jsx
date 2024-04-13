import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  // <div>
  //   <Register />
  // </div>
  )
}

export default App
