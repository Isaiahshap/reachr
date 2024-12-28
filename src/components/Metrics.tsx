import { motion } from 'framer-motion'
import { IconChart, IconUsers, IconGlobe, IconSpeed } from './icons'

const metrics = [
  {
    icon: IconChart,
    value: '47%',
    label: 'Increase in Conversion',
    description: 'Average improvement in cold call success rates'
  },
  {
    icon: IconUsers,
    value: '10,000+',
    label: 'Active Users',
    description: 'Growing community of sales professionals'
  },
  {
    icon: IconGlobe,
    value: '120+',
    label: 'Countries',
    description: 'Global reach with multi-language support'
  },
  {
    icon: IconSpeed,
    value: '3.2x',
    label: 'Faster Outreach',
    description: 'Improvement in sales team efficiency'
  }
]

export default function Metrics() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white rounded-xl shadow-lg shadow-gray-200/50"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <metric.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm font-medium text-gray-600">{metric.label}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 