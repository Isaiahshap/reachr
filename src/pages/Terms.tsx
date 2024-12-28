import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Demo Application Notice</h2>
              <p className="text-primary-800">
                This is a demonstration SaaS application built by Yeshaya Shields as part of a rapid development showcase. This is not a real service and no actual services are provided.
              </p>
            </div>

            <h2>Purpose</h2>
            <p>
              This application was created to demonstrate expertise in:
            </p>
            <ul>
              <li>Modern SaaS application architecture</li>
              <li>Responsive UI/UX design</li>
              <li>React application development</li>
              <li>TypeScript implementation</li>
              <li>Modern CSS with Tailwind</li>
              <li>Animation and interaction design</li>
            </ul>

            <h2>Development Timeline</h2>
            <p>
              This application was built as part of a rapid development showcase, demonstrating the ability to create professional-grade SaaS applications efficiently and effectively.
            </p>

            <h2>Contact Information</h2>
            <p>
              For inquiries about building similar applications or other development services, please visit{' '}
              <a href="https://yeshaya.dev" className="text-primary-600 hover:text-primary-700">
                yeshaya.dev
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 