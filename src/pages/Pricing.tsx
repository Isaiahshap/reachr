// src/pages/Pricing.tsx
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
