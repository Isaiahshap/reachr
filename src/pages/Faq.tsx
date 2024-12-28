// src/pages/Faq.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Faq() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-7xl flex-1 px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          <details className="rounded bg-white p-4 shadow">
            <summary className="font-semibold">How does the AI learn?</summary>
            <p className="mt-2 text-gray-600">
              Reachr uses proprietary machine learning models...
            </p>
          </details>

          <details className="rounded bg-white p-4 shadow">
            <summary className="font-semibold">Which CRMs do you support?</summary>
            <p className="mt-2 text-gray-600">
              We support Salesforce, HubSpot, Zoho, and many more...
            </p>
          </details>
          
          {/* Add more FAQ items as needed */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
