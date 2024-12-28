// src/components/HowItWorks.tsx
import { Link } from 'react-router-dom'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload Your Leads',
      description: 'Import contacts or integrate your CRM directly.',
      icon: '📁',
    },
    {
      title: 'Let the AI Call',
      description: 'Our AI agent handles outreach, records interactions, and gathers insights.',
      icon: '☎️',
    },
    {
      title: 'Review Performance',
      description: 'Track metrics, follow up on leads, and optimize future outreach.',
      icon: '📊',
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Getting Started is Easy
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={idx} className="rounded bg-gray-50 p-6 text-center">
              <div className="mb-4 text-4xl">{step.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/demo"
            className="inline-block rounded border border-primary-500 px-6 py-3 text-primary-500 hover:bg-primary-50"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
