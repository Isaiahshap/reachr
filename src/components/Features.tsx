// src/components/Features.tsx
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: 'Increase in Conversion',
      description: 'Average improvement in cold call success rates across all industries and customer segments.',
      metric: '47%',
      metricLabel: 'higher conversion rate',
    },
    {
      title: 'Active Users',
      description: 'Growing community of sales professionals using Reachr to transform their outreach.',
      metric: '10,000+',
      metricLabel: 'sales professionals',
    },
    {
      title: 'Countries',
      description: 'Global reach with multi-language support and region-specific compliance built in.',
      metric: '120+',
      metricLabel: 'supported regions',
    },
    {
      title: 'Faster Outreach',
      description: 'Improvement in sales team efficiency with AI-powered automation and qualification.',
      metric: '3.2x',
      metricLabel: 'productivity boost',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-radial from-primary-600/30 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-sm font-semibold text-primary-600 mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Scale Your Sales with Confidence
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  {feat.metric}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {feat.metricLabel}
                </div>
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feat.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
