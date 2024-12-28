// src/components/HowItWorks.tsx
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import dataAnimation from '../assets/data.json'
import callAnimation from '../assets/call.json'
import analyticsAnimation from '../assets/analytics.json'

export default function HowItWorks() {
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
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-gray-600">
            Replace your SDR team with AI today
          </p>
        </div>

        <div className="grid gap-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-8 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-xl">
                {idx + 1}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-700 border border-gray-200"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-32">
                <Lottie
                  animationData={step.animationData}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Start Free Trial
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
