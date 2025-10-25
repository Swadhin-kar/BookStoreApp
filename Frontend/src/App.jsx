import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './components/AuthProvider'
import { Navigate } from 'react-router-dom'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to = {"/signup"} />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
