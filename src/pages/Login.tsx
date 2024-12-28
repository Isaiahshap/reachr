// src/pages/Login.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-md flex-1 px-4 py-16">
        <h1 className="mb-4 text-2xl font-bold">Login to Reachr</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
          >
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
