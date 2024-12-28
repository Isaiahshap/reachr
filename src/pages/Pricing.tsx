// src/pages/Pricing.tsx
import Header from '../components/Header'
import PricingTable from '../components/PricingTable'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PricingTable />
      </main>
      <Footer />
    </div>
  )
}
