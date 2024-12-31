import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import './App.css'
import { Landing } from './components/Landing'
import { Room } from './components/Room'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/room' element={<Room />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
