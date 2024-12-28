// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Faq from './pages/Faq'
import Login from './pages/Login'  // optional if you have a separate login page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root/Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Additional pages */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
