import { motion } from 'framer-motion'
import { IconSalesforce, IconHubspot, IconZoho, IconPipedrive } from '../components/icons'

const integrations = [
  {
    name: 'Salesforce',
    icon: IconSalesforce,
    description: 'Seamless sync with Salesforce CRM'
  },
  {
    name: 'HubSpot',
    icon: IconHubspot,
    description: 'Direct integration with HubSpot CRM'
  },
  {
    name: 'Zoho',
    icon: IconZoho,
    description: 'Full compatibility with Zoho CRM'
  },
  {
    name: 'Pipedrive',
    icon: IconPipedrive,
    description: 'Native support for Pipedrive CRM'
  }
]

export default function Integration() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Integrate with Your Favorite CRM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Connect Reachr with your existing workflow in just a few clicks
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <integration.icon className="w-16 h-16 text-gray-700" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {integration.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 