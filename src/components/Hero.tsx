// src/components/Hero.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1 }}
          className="absolute -left-1/4 top-0 h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-primary-600 to-primary-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-gradient-to-l from-primary-400 to-primary-600 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-8 inline-flex items-center rounded-full bg-primary-50 px-6 py-2.5 text-sm font-medium text-primary-600">
              <span className="mr-2">✨</span>
              Powered by GPT-4 Technology
            </div>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Your AI Sales Agent That Never{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Sleeps
                </span>
              </span>
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Let our AI handle your cold calls while you focus on closing deals. 
              Smarter conversations, better conversion rates, zero coffee breaks.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-primary-600 px-8 text-base font-medium text-white transition duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              >
                Start Free Trial
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-base font-medium text-gray-900 transition hover:border-primary-600 hover:text-primary-600"
              >
                Watch Demo
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Interactive Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mt-0"
          >
            <div className="relative aspect-square rounded-2xl bg-white p-8 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-200/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-400" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 rounded bg-gray-100" />
                    <div className="h-3 w-24 rounded bg-gray-100" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full rounded bg-gray-100" />
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="h-3 w-4/6 rounded bg-gray-100" />
                </div>
                <div className="flex justify-end">
                  <div className="h-8 w-24 rounded-lg bg-primary-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
