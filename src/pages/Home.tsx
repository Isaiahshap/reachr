// src/pages/Home.tsx
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PricingTable from '../components/PricingTable'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <PricingTable />
        <Testimonials />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
