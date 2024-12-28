// src/components/Testimonials.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Head of Sales, TechCorp',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&h=256&fit=crop',
    company: 'TechCorp',
    companyColor: 'bg-blue-500',
    quote: 'Reachr has completely transformed our outbound sales process. We\'ve seen a 3x increase in qualified leads and our sales team can focus on what they do best - closing deals.',
    stats: {
      value: '347%',
      label: 'increase in meetings booked'
    }
  },
  {
    name: 'Mark Smith',
    role: 'CEO, ScaleAI Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop',
    company: 'ScaleAI',
    companyColor: 'bg-purple-500',
    quote: 'The ROI with Reachr has been incredible. What used to take our SDR team well over a month now happens in days (or even hours), with better qualification and follow-up rates.',
    stats: {
      value: '82%',
      label: 'reduction in CAC'
    }
  },
  {
    name: 'Emily Chen',
    role: 'Director of Growth, Quantum Ventures',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&fit=crop',
    company: 'Quantum',
    companyColor: 'bg-teal-500',
    quote: 'After implementing Reachr, our pipeline quality improved dramatically. The AI qualification is incredibly accurate, and the personalization at scale is game-changing.',
    stats: {
      value: '5.2x',
      label: 'pipeline growth'
    }
  }
]

export default function Testimonials() {
  const { showDemoNotice } = useDemoNotice()

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4"
          >
            Sales Teams Love Reachr 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent max-w-2xl mx-auto"
          >
            Join hundreds of high-growth companies scaling their sales with AI
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl shadow-gray-900/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${testimonial.companyColor} text-white text-xs font-bold flex items-center justify-center`}>
                    {testimonial.company[0]}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-8 font-medium">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-8 border-t border-gray-200">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  {testimonial.stats.value}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.stats.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={showDemoNotice}
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
          >
            Read more case studies
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
