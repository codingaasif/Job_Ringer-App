import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from "react-router-dom"
import Registration from './components/Registration'
import Login from './components/Login'
// import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
