// src/components/Hero.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import heroAnimation from '../assets/hero.json'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary-500/40 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary-400/40 to-transparent blur-3xl"
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
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-2 text-sm font-medium text-primary-600 shadow-inner"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                ✨
              </motion.span>
              Powered by GPT-4 Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Your AI Sales Agent That Never{' '}
              <span className="relative">
                <span className="relative inline-block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Sleeps
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-lg leading-relaxed text-gray-600"
            >
              Let our AI handle your cold calls while you focus on closing deals. 
              Smarter conversations, better conversion rates, zero coffee breaks.
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mt-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/30 via-primary-200/30 to-primary-100/30 rounded-full blur-2xl transform scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent rounded-full backdrop-blur-sm" />
              </div>
              
              <motion.div
                animate={{ 
                  y: ['-5%', '5%'],
                  rotate: ['-5deg', '5deg']
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 z-20"
              >
                <div className="absolute top-0 left-1/4 w-12 h-12 bg-primary-100 rounded-lg blur opacity-60" />
                <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-primary-200 rounded-full blur-sm opacity-40" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 bg-gradient-to-b from-white/80 to-white/20 rounded-3xl p-4 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20"
              >
                <Lottie
                  animationData={heroAnimation}
                  loop={true}
                  className="w-full h-full drop-shadow-2xl"
                />
              </motion.div>

              <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/10 via-primary-300/5 to-primary-200/10 rounded-full blur-3xl transform scale-150 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
