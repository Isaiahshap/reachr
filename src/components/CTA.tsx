import { motion } from 'framer-motion'
import { IconArrowRight } from './icons'
import { useDemoNotice } from '../contexts/DemoNoticeContext'
import Lottie from 'lottie-react'
import ctaAnimation from '../assets/cta.json'

export default function CTA() {
  const { showDemoNotice } = useDemoNotice()

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showDemoNotice()
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-600" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-600" />
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20 mb-8"
            >
              Limited Time Offer
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
            >
              Ready to Transform Your 
              <span className="block">Sales Process?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-50 mb-12"
            >
              Join thousands of sales teams who have already upgraded their cold calling
              with AI-powered automation. Start your free trial today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 active:bg-primary-100 transition-all duration-200 group"
              >
                <span>Start Free Trial</span>
                <IconArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200"
              >
                Schedule Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-primary-100"
            >
              {[
                '14-day free trial',
                'No credit card required',
                'Cancel anytime'
              ].map((text) => (
                <button
                  key={text}
                  onClick={handleButtonClick}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{text}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right column - Lottie animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <Lottie 
              animationData={ctaAnimation} 
              className="w-full max-w-[500px] mx-auto"
              loop={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
        <div className="h-[400px] w-[400px] bg-gradient-radial from-primary-400/30 to-transparent blur-3xl" />
      </div>
    </section>
  )
} 