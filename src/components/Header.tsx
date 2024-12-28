// src/components/Header.tsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            Reachr
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">Home</Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">About</Link>
            <Link to="/faq" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition">FAQ</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
