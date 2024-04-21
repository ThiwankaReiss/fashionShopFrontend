import { useState } from 'react'
import './App.css'

import Login from './assets/component/Login/Login'
import Register from './assets/component/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './assets/component/NavBar/NavBar'
import Products from './assets/component/Products/Products'
import Profile from './assets/component/Profile/Profile'
import { CustomerProvider } from './assets/component/Context/CustomerContext.jsx';
function App() {

  return (
    <BrowserRouter>
      <CustomerProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  )
}

export default App
