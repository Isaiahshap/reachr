import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

const tiers = [
  {
    name: 'Starter',
    price: '999',
    billing: 'per month',
    description: 'Perfect for small sales teams getting started with AI automation.',
    features: [
      'Up to 1,000 calls per month',
      'Basic AI conversation model',
      'Email & chat support',
      'Salesforce or HubSpot integration',
      'Basic analytics dashboard',
      'Standard voice customization'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '2,499',
    billing: 'per month',
    description: 'Ideal for growing teams that need advanced features and integrations.',
    features: [
      'Up to 5,000 calls per month',
      'Advanced AI conversation model',
      'Priority support',
      'All CRM integrations',
      'Advanced analytics & reporting',
      'Custom voice & personality',
      'A/B testing capabilities',
      'Workflow automation'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    billing: 'contact sales',
    description: 'For organizations requiring maximum scale and customization.',
    features: [
      'Unlimited calls',
      'Enterprise AI model',
      'Dedicated success manager',
      'Custom API access',
      'Advanced security features',
      'Multi-language support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

export default function Pricing() {
  const { showDemoNotice } = useDemoNotice()
  const [isAnnual, setIsAnnual] = useState(false)

  const handleStartTrial = (e: React.MouseEvent) => {
    e.preventDefault()
    showDemoNotice()
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 text-sm font-semibold text-primary-600 mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              TRUSTED BY 10,000+ SALES TEAMS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-8"
          >
            Start scaling your sales team with AI today
          </motion.p>

          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary-600"
              role="switch"
              aria-checked={isAnnual}
            >
              <span className={`${isAnnual ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`} />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-primary-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col h-full relative rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-primary-50 to-white border-2 border-primary-500 shadow-xl shadow-primary-500/10'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  {tier.price !== 'Custom' ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">$</span>
                      <span className="text-5xl font-bold text-gray-900">
                        {isAnnual 
                          ? Math.round((parseInt(tier.price.replace(',', '')) * 12 * 0.8)).toLocaleString()
                          : tier.price
                        }
                      </span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  )}
                  <span className="ml-2 text-gray-500">/{isAnnual ? 'year' : tier.billing}</span>
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleStartTrial}
                className="mt-8 block w-full rounded-lg bg-primary-600 px-6 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 