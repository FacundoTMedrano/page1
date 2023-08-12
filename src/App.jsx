import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Services from "./pages/Services"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='About' element={<About />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Services' element={<Services />} />
      </Routes>
    </div>
  )
}
