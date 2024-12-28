import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../components/icons'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700" />
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to Transform Your Sales Process?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-primary-50"
          >
            Join thousands of sales teams who have already upgraded their cold calling
            with AI-powered automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-all duration-200"
            >
              Start Free Trial
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 