// src/components/Hero.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import heroAnimation from '../assets/hero.json'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden pt-20 bg-[#f8fafc]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary-600/30 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary-400/30 to-transparent blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 text-sm font-semibold text-primary-600"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                AI-POWERED COLD CALLING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.15]"
            >
              10x Your Sales Pipeline{' '}
              <span className="relative">
                <span className="relative inline-block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  While You Sleep
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-relaxed text-gray-600"
            >
              Deploy AI agents that handle thousands of personalized cold calls 24/7. 
              Get qualified leads while you sleep. No scripts, no burnout, just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/signup"
                className="group inline-flex h-14 items-center justify-center rounded-lg bg-primary-600 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              >
                Start Free Trial
                <motion.svg
                  className="ml-2 h-5 w-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </Link>
              
              <Link
                to="/demo"
                className="group inline-flex h-14 items-center justify-center rounded-lg border-2 border-gray-200 bg-white/50 backdrop-blur-sm px-8 text-base font-medium text-gray-900 transition-all duration-300 hover:border-primary-600 hover:text-primary-600 hover:shadow-lg"
              >
                Watch Demo
                <motion.svg
                  className="ml-2 h-5 w-5"
                  whileHover={{ rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 bg-gradient-to-b from-[#f8fafc] to-[#f8fafc] rounded-3xl p-4"
          >
            <Lottie
              animationData={heroAnimation}
              loop={true}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
