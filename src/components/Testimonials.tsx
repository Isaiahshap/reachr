// src/components/Testimonials.tsx
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Sales Manager at Acme Inc.',
    image: 'https://via.placeholder.com/50?text=S',
    quote: 'Reachr transformed our cold-calling process and boosted our conversion rate by 30%!',
  },
  {
    name: 'Mark Smith',
    role: 'Recruiter at TalentHive',
    image: 'https://via.placeholder.com/50?text=M',
    quote: 'The AI handles initial screening calls effortlessly, saving me countless hours.',
  },
  {
    name: 'Emily Chen',
    role: 'Real Estate Agent at HomeFinders',
    image: 'https://via.placeholder.com/50?text=E',
    quote: 'Our lead follow-ups are quick and personalized. Clients think they’re talking to a real person!',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Hear From Our Customers
        </h2>
        <motion.div
          className="flex gap-8 overflow-x-scroll pb-4"
          // For a more robust slider, add more advanced Framer Motion logic
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="w-80 flex-shrink-0 rounded bg-white p-6 shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
