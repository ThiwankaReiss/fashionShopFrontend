import { useState } from 'react'
import './App.css'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Manage from './pages/Manage/Manage'
import { useSnapshot } from 'valtio'
import state from './store'
function App() {
  const snap = useSnapshot(state);
  return (
    <BrowserRouter>
    {/* //   <CustomerProvider> */}
        <NavBar navButton={snap.navButton} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
    {/* //   </CustomerProvider> */}
    </BrowserRouter>
  )
}

export default App
