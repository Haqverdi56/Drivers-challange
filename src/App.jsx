import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Favorites from './components/Favorites'
import Main from './components/Main'

function App() {

  return (
    <div className="App">
      <div className='links'>
        <Link to='/'>Home Page</Link>
        <Link to='favorites'>Favorites Page</Link>
      </div>
      
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='favorites' element={<Favorites/>} />
    </Routes>
      
    </div>
  )
}

export default App
