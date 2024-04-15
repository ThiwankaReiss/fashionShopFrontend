import { useState } from 'react'
import './App.css'

import Login from './assets/component/Login/Login'
import Register from './assets/component/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './assets/component/NavBar/NavBar'

function App() {

  return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
