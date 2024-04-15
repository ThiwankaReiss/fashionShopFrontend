import { useState } from 'react'
import './App.css'

import Login from './assets/component/Login/Login'
import Register from './assets/component/Register/Register'

function App() {

  return (
    <div className="background-color-set">
      <div className="container ">
        <div className="row">
          <Register/>
        </div>
      </div>
    </div>


  )
}

export default App
