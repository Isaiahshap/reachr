// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Company Info */}
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-700">Reachr</h3>
              <p className="text-sm text-gray-600">
                Automate your cold calls with AI, tailored to your industry.
              </p>
            </div>
  
            {/* Links */}
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-gray-600 hover:text-gray-800">
                About Us
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-gray-800">
                Terms of Service
              </a>
              <a href="/faq" className="text-gray-600 hover:text-gray-800">
                FAQ
              </a>
            </div>
  
            {/* Newsletter & Social */}
            <div>
              <form className="mb-4">
                <label
                  htmlFor="newsletter"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Stay updated with Reachr
                </label>
                <div className="flex">
                  <input
                    id="newsletter"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-l border border-gray-300 px-4 py-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-r bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary-500"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-6 border-gray-200" />
          
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Reachr. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  