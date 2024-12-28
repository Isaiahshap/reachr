import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cookies() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg">
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Demo Application Notice</h2>
              <p className="text-primary-800">
                This is a demonstration website created by Yeshaya Shields to showcase SaaS development capabilities. No actual cookies are used for tracking or data collection.
              </p>
            </div>

            <h2>Technical Implementation</h2>
            <p>
              This demo application was built using:
            </p>
            <ul>
              <li>React 18 with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>React Router for navigation</li>
              <li>Headless UI for accessible components</li>
            </ul>

            <h2>Third-Party Resources</h2>
            <p>
              The following resources were used in creating this demo:
            </p>
            <ul>
              <li>Animation assets from LottieFiles</li>
              <li>Icons from Heroicons</li>
              <li>Fonts from Google Fonts</li>
            </ul>

            <h2>Learn More</h2>
            <p>
              To learn more about having a custom SaaS application built for your business, visit{' '}
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