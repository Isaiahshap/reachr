import { motion } from 'framer-motion'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

const integrations = [
  {
    name: 'Salesforce',
    description: 'Seamless sync with Salesforce CRM',
    features: ['Real-time data sync', 'Custom field mapping', 'Automated workflows']
  },
  {
    name: 'HubSpot',
    description: 'Direct integration with HubSpot CRM',
    features: ['Contact sync', 'Deal tracking', 'Activity logging']
  },
  {
    name: 'Zoho',
    description: 'Full compatibility with Zoho CRM',
    features: ['Two-way sync', 'Custom rules', 'Batch updates']
  },
  {
    name: 'Pipedrive',
    description: 'Native support for Pipedrive CRM',
    features: ['Pipeline sync', 'Deal automation', 'Activity tracking']
  }
]

export default function Integration() {
  const { showDemoNotice } = useDemoNotice()

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-radial from-primary-600/30 to-transparent blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4"
          >
            Use Reachr with Your Favorite CRM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent max-w-2xl mx-auto"
          >
            Connect Reachr with your existing workflow in just a few clicks. 
            Our enterprise-grade integrations ensure seamless data flow.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {integration.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {integration.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {integration.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={showDemoNotice}
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View all integrations
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 