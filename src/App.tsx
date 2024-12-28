// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DemoNoticeProvider } from './contexts/DemoNoticeContext'
import DemoNotice from './components/DemoNotice'
import { useDemoNotice } from './contexts/DemoNoticeContext'
import { useScrollToTop } from './utils/ScrollToTop'

// PAGES
import Home from './pages/Home'
import PricingPage from './pages/Pricing'
import About from './pages/About'
import Faq from './pages/Faq'
import Login from './pages/Login'  // optional if you have a separate login page
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'

function ScrollToTop() {
  useScrollToTop()
  return null
}

function AppContent() {
  const { isNoticeOpen, hideDemoNotice } = useDemoNotice()
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Root/Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Additional pages */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </BrowserRouter>
      <DemoNotice isOpen={isNoticeOpen} onClose={hideDemoNotice} />
    </>
  )
}

export default function App() {
  return (
    <DemoNoticeProvider>
      <AppContent />
    </DemoNoticeProvider>
  )
}
