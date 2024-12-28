// src/pages/Faq.tsx
import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

export default function Faq() {
  const { showDemoNotice } = useDemoNotice()

  const faq = [
    {
      category: 'Product & Features',
      questions: [
        {
          question: 'What makes Reachr\'s AI different from other solutions?',
          answer: 'Reachr uses advanced natural language processing and real-time adaptation to conduct human-like conversations. Our AI learns from millions of successful sales interactions, achieving a 47% higher conversion rate than traditional methods. We offer real-time sentiment analysis, dynamic script adjustment, and seamless CRM integration.'
        },
        {
          question: 'How does the AI handle complex sales conversations?',
          answer: 'Our AI uses contextual understanding and dynamic response mapping to handle complex scenarios. It can identify buying signals, address objections in real-time, and adjust its approach based on prospect responses. The system also knows when to escalate to human sales representatives for high-value opportunities.'
        },
        {
          question: 'What languages and regions do you support?',
          answer: 'Reachr currently supports 12 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, and Mandarin. Each language model is trained on native speakers with regional accent variations and cultural nuances to ensure natural conversations.'
        }
      ]
    },
    {
      category: 'Implementation & Integration',
      questions: [
        {
          question: 'How long does it take to deploy Reachr?',
          answer: 'Most customers are fully operational within 24-48 hours. Our onboarding process includes CRM integration, AI voice customization, campaign setup, and team training. We provide dedicated support throughout the implementation process to ensure smooth adoption.'
        },
        {
          question: 'Which CRM systems integrate with Reachr?',
          answer: 'We offer native integrations with major CRM platforms including Salesforce, HubSpot, Pipedrive, and Microsoft Dynamics. Our two-way sync ensures real-time data flow, automated lead scoring, and instant handoff of qualified opportunities.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          question: 'How do you ensure data security?',
          answer: 'We maintain SOC 2 Type II compliance and use enterprise-grade encryption for all data. Our infrastructure is hosted in secure, redundant data centers with 24/7 monitoring. We regularly undergo third-party security audits and penetration testing.'
        },
        {
          question: 'What compliance standards do you meet?',
          answer: 'Reachr is compliant with GDPR, CCPA, TCPA, and other regional regulations. Our AI is programmed to respect do-not-call lists, time zones, and regional calling restrictions. All calls are recorded and transcribed for quality assurance and compliance monitoring.'
        }
      ]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4"
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
              >
                Everything you need to know about Reachr
              </motion.p>
            </div>

            {faq.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="mb-16"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                  className="text-2xl font-bold text-gray-900 mb-8"
                >
                  {category.category}
                </motion.h2>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => (
                    <motion.div
                      key={faqIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: faqIdx * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <Disclosure>
                        {({ open }) => (
                          <div className="rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm overflow-hidden hover:border-primary-200 transition-all duration-300">
                            <Disclosure.Button className="flex w-full items-center justify-between px-8 py-6 group">
                              <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                {faq.question}
                              </span>
                              <motion.span
                                animate={{ 
                                  rotate: open ? 180 : 0,
                                  scale: open ? 1.1 : 1
                                }}
                                transition={{ 
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20
                                }}
                                className="ml-6 flex-none text-primary-600"
                              >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.span>
                            </Disclosure.Button>

                            <Disclosure.Panel
                              as={motion.div}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98]
                                  },
                                  opacity: { duration: 0.25, delay: 0.1 }
                                }
                              }}
                              exit={{ 
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: { 
                                    duration: 0.3,
                                    ease: [0.04, 0.62, 0.23, 0.98]
                                  },
                                  opacity: { duration: 0.25 }
                                }
                              }}
                              className="px-8 overflow-hidden"
                            >
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    duration: 0.2,
                                    delay: 0.1
                                  }
                                }}
                                exit={{ 
                                  opacity: 0,
                                  y: -10,
                                  transition: {
                                    duration: 0.2
                                  }
                                }}
                              >
                                <p className="text-gray-600 leading-relaxed pb-6">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-primary-600">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-600" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Ready to Transform Your Sales Pipeline?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={showDemoNotice}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-all duration-200"
              >
                Start Free Trial
              </button>
              <button
                onClick={showDemoNotice}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
