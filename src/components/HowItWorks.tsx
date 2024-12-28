// src/components/HowItWorks.tsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import dataAnimation from '../assets/data.json'
import callAnimation from '../assets/call.json'
import analyticsAnimation from '../assets/analytics.json'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

export default function HowItWorks() {
  const { showDemoNotice } = useDemoNotice()
  const containerRef = useRef(null)

  const steps = [
    {
      title: 'Import Your Data',
      description: 'Connect your CRM or upload CSV files in seconds. No technical setup required.',
      details: [
        'One-click Salesforce & HubSpot sync',
        '2-way data synchronization',
        'Automated list cleaning'
      ],
      animationData: dataAnimation
    },
    {
      title: 'AI Makes the Calls',
      description: 'Our AI handles thousands of conversations simultaneously while you focus on closing.',
      details: [
        '2000+ calls per hour',
        'Real-time lead qualification',
        'Instant handoff for hot leads'
      ],
      animationData: callAnimation
    },
    {
      title: 'Scale Your Pipeline',
      description: 'Track performance in real-time and optimize your conversion rates.',
      details: [
        '40% average qualification rate',
        'detailed conversation analytics',
        '3x pipeline growth'
      ],
      animationData: analyticsAnimation
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4"
          >
            Get Started in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
          >
            Replace your SDR team with AI today
          </motion.p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-lg md:text-xl">
                {idx + 1}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white text-gray-700 border border-gray-200"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-24 md:w-32 mx-auto md:mx-0">
                <Lottie
                  animationData={step.animationData}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <button
            onClick={showDemoNotice}
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors group"
          >
            Start Free Trial
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
