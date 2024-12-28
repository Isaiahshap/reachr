import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold mb-8">Privacy Notice</h1>
          
          <div className="prose prose-lg">
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Demo Application Notice</h2>
              <p className="text-primary-800">
                This is a demo SaaS application created by Yeshaya Shields (yeshaya.dev) to showcase rapid SaaS application development capabilities. No real user data is collected or stored.
              </p>
            </div>

            <h2>About This Demo</h2>
            <p>
              Reachr is a demonstration project hand-coded using modern web technologies including:
            </p>
            <ul>
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>Headless UI for accessible components</li>
              <li>Lottie animations (provided by LottieFiles)</li>
            </ul>

            <h2>Attribution</h2>
            <p>
              This demo application makes use of the following resources:
            </p>
            <ul>
              <li>Animations: LottieFiles (lottiefiles.com)</li>
              <li>Icons: Heroicons (heroicons.com)</li>
              <li>Fonts: Inter, Cabinet Grotesk</li>
            </ul>

            <h2>Contact</h2>
            <p>
              For more information about this demo or to discuss your own SaaS project, please visit{' '}
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