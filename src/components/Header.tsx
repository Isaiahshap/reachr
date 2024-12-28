// src/components/Header.tsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-100/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link 
              to="/" 
              className="text-xl font-display font-bold text-gray-900 hover:text-gray-900 transition-colors flex items-center"
            >
              REACHR
              <span className="text-primary-600 text-xl">.</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Pricing', 'About', 'FAQ'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
