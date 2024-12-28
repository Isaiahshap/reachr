// src/components/Footer.tsx
import { Link } from 'react-router-dom'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

const navigation = {
  product: [
    { name: 'Features', href: '/features', isDemo: true },
    { name: 'Integrations', href: '/integrations', isDemo: true },
    { name: 'Pricing', href: '/pricing', isDemo: true },
    { name: 'Case Studies', href: '/case-studies', isDemo: true },
    { name: 'API', href: '/api', isDemo: true },
  ],
  company: [
    { name: 'About', href: '/about', isDemo: true },
    { name: 'Blog', href: '/blog', isDemo: true },
    { name: 'Careers', href: '/careers', isDemo: true },
    { name: 'Press', href: '/press', isDemo: true },
  ],
  resources: [
    { name: 'Documentation', href: '/docs', isDemo: true },
    { name: 'Help Center', href: '/help', isDemo: true },
    { name: 'Community', href: '/community', isDemo: true },
    { name: 'Status', href: '/status', isDemo: true },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy', isDemo: false },
    { name: 'Terms', href: '/terms', isDemo: false },
    { name: 'Cookie Policy', href: '/cookies', isDemo: true },
  ],
}

export default function Footer() {
  const { showDemoNotice } = useDemoNotice()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, isDemo: boolean) => {
    if (isDemo) {
      e.preventDefault()
      showDemoNotice()
    }
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Reachr" className="h-6 w-auto" />
              <span className="text-xl font-bold text-gray-900">REACHR<span className="text-primary-600 text-xl">.</span></span>
            </Link>
            <p className="mt-4 text-base text-gray-600 max-w-md">
              AI-powered cold calling platform that helps sales teams scale their outreach and close more deals.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900">Stay updated</h3>
              <form className="mt-2 sm:flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 sm:text-sm"
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    showDemoNotice()
                  }}
                  className="mt-3 sm:mt-0 sm:ml-3 flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-900 capitalize">{category}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      {item.name === 'LinkedIn' ? (
                        <a
                          href="https://linkedin.com/company/reachr"
                          className="text-sm text-gray-600 hover:text-gray-900"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(e, item.isDemo)}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center space-x-6">
              <a href="https://twitter.com/reachr" className="text-gray-400 hover:text-gray-500" onClick={(e) => {
                e.preventDefault()
                showDemoNotice()
              }}>
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/reachr" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Reachr, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
  