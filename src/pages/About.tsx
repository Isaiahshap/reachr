import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lottie from 'lottie-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import callAnimation from '../assets/call.json'
import heroAnimation from '../assets/hero1.json'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

export default function About() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const team = useMemo(() => [
    {
      name: 'Engineering',
      description: 'World-class AI researchers and engineers building the future of sales.',
      stats: [
        { label: 'PhD Researchers', value: '40%' },
        { label: 'Open Source Contributors', value: '80%' },
        { label: 'Published Papers', value: '25+' }
      ],
      gradient: 'from-primary-500 to-purple-500'
    },
    {
      name: 'Leadership',
      description: 'Founded by engineers and sales leaders from top AI companies.',
      stats: [
        { label: 'Combined Experience', value: '25+ years' },
        { label: 'Previous Exits', value: '3' },
        { label: 'Patents Filed', value: '12' }
      ],
      gradient: 'from-blue-500 to-primary-500'
    },
    {
      name: 'Customer Success',
      description: 'Former sales leaders helping you maximize your AI potential.',
      stats: [
        { label: 'Avg Response Time', value: '< 2hrs' },
        { label: 'CSAT Score', value: '98%' },
        { label: 'Customer Retention', value: '95%' }
      ],
      gradient: 'from-purple-500 to-pink-500'
    }
  ], [])

  const milestones = useMemo(() => [
    {
      date: 'June 2021',
      title: 'Founded in X Crombulator S21',
      description: 'Accepted into X Crombulator with prototype showing 40% improvement in cold call conversion rates.',
      metrics: [
        { label: 'Initial Users', value: '12' },
        { label: 'Demo Conversion', value: '78%' }
      ],
      highlight: 'Backed by X Crombulator partners and industry veterans',
      tags: ['Seed Round', 'AI Technology', 'X Crombulator S21']
    },
    {
      date: 'December 2021',
      title: '$3.5M Seed Round',
      description: 'Led by Sequoia with participation from Founders Fund and top AI researchers.',
      metrics: [
        { label: 'ARR', value: '$450K' },
        { label: 'Customer Growth', value: '312%' }
      ],
      highlight: 'Featured in TechCrunch as "Top AI Startup to Watch"',
      tags: ['Funding', 'Growth', 'Press']
    },
    {
      date: 'September 2022',
      title: 'Enterprise Launch',
      description: 'Released enterprise-grade features after successful pilots with Fortune 500 companies.',
      metrics: [
        { label: 'Enterprise Customers', value: '5' },
        { label: 'Average Deal Size', value: '$127K' }
      ],
      highlight: 'Named Gartner "Cool Vendor in Conversational AI"',
      tags: ['Enterprise', 'Product Launch', 'Recognition']
    },
    {
      date: 'March 2023',
      title: '$18M Series A',
      description: 'Major expansion with focus on AI model advancement and international markets.',
      metrics: [
        { label: 'ARR', value: '$4.2M' },
        { label: 'Team Size', value: '42' }
      ],
      highlight: 'Launched GPT-4 powered conversation engine',
      tags: ['Series A', 'AI Innovation', 'Scale']
    },
    {
      date: 'Present',
      title: 'Rapid Scale',
      description: 'Serving thousands of sales teams across 120+ countries.',
      metrics: [
        { label: 'MRR Growth', value: '23%' },
        { label: 'NPS Score', value: '72' }
      ],
      highlight: 'Processing 2M+ calls monthly',
      tags: ['Growth', 'Global', 'Metrics']
    }
  ], [])


  const { showDemoNotice } = useDemoNotice()

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - Mobile Optimization */}
        <section className="relative min-h-[60vh] sm:min-h-[50vh] flex items-center overflow-hidden pt-16 sm:pt-24">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary-600/30 to-transparent blur-3xl"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 items-center">
              <motion.div
                style={{ opacity, scale }}
                className="space-y-6 sm:space-y-4 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/20"
                >
                  OUR STORY
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  Building the{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                    Future of Sales
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base text-gray-600 leading-relaxed max-w-lg"
                >
                  From a small team of dreamers to the leader in AI-powered sales automation. 
                  Join us in revolutionizing how businesses connect with their customers.
                </motion.p>
              </motion.div>

              <motion.div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                <div className="absolute inset-[-0px]">
                  <Lottie 
                    animationData={callAnimation}
                    loop={true}
                    className="w-full h-full scale-[1.1]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Grid - Mobile Optimization */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {team.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                       style={{ backgroundImage: `linear-gradient(to right, ${group.gradient})` }} />
                  <div className="relative rounded-2xl bg-white shadow-lg p-6 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                      {group.stats[0].value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {group.stats[0].label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section - Mobile Optimization */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              >
                Our Journey
              </motion.h2>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary-600 to-primary-400" />
              
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row ${idx % 2 === 0 ? 'sm:justify-end' : ''} mb-16 sm:mb-24`}
                >
                  <div className={`w-full sm:w-5/12 ${idx % 2 === 0 ? 'sm:mr-12' : 'sm:ml-12'} pl-12 sm:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="absolute top-0 transform -translate-y-1/2 inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                        {milestone.date}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {milestone.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {milestone.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 top-8 transform sm:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimization */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-primary-600" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-600" />
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="max-w-2xl text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20 mb-8"
                >
                  Limited Time Offer
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
                >
                  Ready to Join Our 
                  <span className="block">Journey?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-primary-50 mb-12"
                >
                  Join thousands of sales teams who have already upgraded their cold calling
                  with AI-powered automation. Start your free trial today.
                </motion.p>

                <motion.div className="flex flex-col w-full sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={showDemoNotice}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-6 sm:px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 active:bg-primary-100 transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      Start Free Trial
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={showDemoNotice} 
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/20 px-6 sm:px-8 py-3 text-base font-semibold text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200"
                  >
                    Schedule Demo
                  </button>
                </motion.div>

                <motion.div className="mt-6 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-primary-100">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm whitespace-nowrap">14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">No credit card required</span>
                  </div>
                </motion.div>
              </div>

              {/* Animation only visible on larger screens */}
              <motion.div className="hidden lg:block">
                <Lottie 
                  animationData={heroAnimation} 
                  className="w-full max-w-[500px] mx-auto"
                  loop={true}
                />
              </motion.div>
            </div>
          </div>

          {/* Decorative Blur */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[400px] bg-gradient-radial from-primary-400/30 to-transparent blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

