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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-100/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="text-xl font-display font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              REACHR
              <span className="text-primary-600 text-xl">.</span>
            </Link>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
