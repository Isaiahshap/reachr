// src/pages/About.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-7xl flex-1 px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold">About Reachr</h1>
        <p className="text-gray-600">
          Reachr is the future of automated cold-calling...
        </p>
        {/* More content as needed */}
      </main>
      <Footer />
    </div>
  )
}
