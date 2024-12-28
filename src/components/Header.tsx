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
          ? 'bg-white shadow-lg shadow-black/[0.03]' 
          : 'bg-white/80 backdrop-blur-lg'
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
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-right transition-all duration-500"
            >
              Reachr
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {['Home', 'Pricing', 'About', 'FAQ'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors group"
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600/80 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
                    initial={false}
                  />
                </Link>
              </motion.div>
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
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
