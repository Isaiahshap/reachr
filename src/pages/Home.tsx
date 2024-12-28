// src/pages/Home.tsx
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Metrics from '../components/Metrics'
import Integration from '../components/Integration'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Metrics />
        <Features />
        <HowItWorks />
        <Integration />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
