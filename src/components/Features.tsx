// src/components/Features.tsx
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: 'AI-Driven Conversations',
      description: 'Leverage advanced NLP to handle queries and objections in real-time.',
      icon: '🤖',
    },
    {
      title: 'CRM Integrations',
      description: 'Seamlessly connect with your favorite CRM for smooth data flow.',
      icon: '🔗',
    },
    {
      title: 'Adaptive Learning',
      description: 'Our AI grows smarter with every call, continuously refining its approach.',
      icon: '📈',
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Why Choose Reachr?
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="rounded-lg bg-white p-6 text-center shadow transition hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{feat.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {feat.title}
              </h3>
              <p className="text-gray-600">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
