// src/components/PricingTable.tsx
import { Link } from 'react-router-dom'

export default function PricingTable() {
  const plans = [
    {
      name: 'Starter',
      price: '$29/mo',
      features: [
        'X minutes of calls/month',
        'AI-assisted script',
        'Basic CRM integration',
      ],
      cta: 'Buy Now',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$79/mo',
      features: [
        'X minutes of calls/month',
        'Advanced AI-adaptive calls',
        'CRM integrations',
        'Analytics Dashboard',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited call minutes',
        'Priority support',
        'Custom AI training',
      ],
      cta: 'Contact Us',
      highlight: false,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg border border-gray-200 p-6 text-center ${
                plan.highlight ? 'shadow-xl' : 'shadow'
              }`}
            >
              {plan.highlight && (
                <div className="absolute right-0 top-0 bg-primary-500 px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-3xl font-bold">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-primary-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={`inline-block w-full rounded px-4 py-2 font-semibold text-white ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500'
                    : 'bg-primary-500 hover:bg-primary-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Cancel anytime. No hidden fees.
        </p>
      </div>
    </section>
  )
}
