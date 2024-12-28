import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDemoNotice } from '../contexts/DemoNoticeContext'

const primaryNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
]

const secondaryNavigation = [
  { 
    name: 'Documentation', 
    href: '#',
    icon: '📚',
    badge: 'New',
    badgeColor: 'bg-green-100 text-green-800'
  },
  { 
    name: 'Help Center', 
    href: '#',
    icon: '💬',
    status: 'Active',
    statusColor: 'text-green-600'
  },
  { 
    name: 'API Reference', 
    href: '#',
    icon: '⚡️',
    badge: 'Beta',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  { 
    name: 'Community', 
    href: '#',
    icon: '👥',
    status: '2.1k online',
    statusColor: 'text-gray-600'
  },
]

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { showDemoNotice } = useDemoNotice()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white/95 backdrop-blur-xl">
                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur border-b border-gray-100/50">
                      <Dialog.Title className="text-lg font-display font-bold text-gray-900">
                        Menu
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-lg p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="flex-1 px-6 py-8">
                      {/* Primary Navigation */}
                      <nav className="space-y-2.5">
                        {primaryNavigation.map((item, idx) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: idx * 0.1,
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }}
                          >
                            <Link
                              to={item.href}
                              className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100/50 active:bg-gray-200/50 transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </nav>

                      {/* Action Buttons */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 space-y-3"
                      >
                        <button
                          onClick={() => {
                            showDemoNotice()
                            setIsOpen(false)
                          }}
                          className="w-full inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-700 active:bg-primary-800 transition-all duration-200"
                        >
                          Get Started
                        </button>
                        <button
                          onClick={() => {
                            showDemoNotice()
                            setIsOpen(false)
                          }}
                          className="w-full inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
                        >
                          Sign In
                        </button>
                      </motion.div>

                      {/* Secondary Navigation */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 pt-8 border-t border-gray-100"
                      >
                        <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Resources
                        </h3>
                        <nav className="mt-4 space-y-1">
                          {secondaryNavigation.map((item, idx) => (
                            <motion.a
                              key={item.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + (idx * 0.1) }}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault()
                                showDemoNotice()
                              }}
                              className="flex items-center px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100/50 active:bg-gray-200/50 transition-all duration-200"
                            >
                              <span className="mr-3 text-lg">{item.icon}</span>
                              <span className="flex-1">{item.name}</span>
                              {item.badge && (
                                <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              )}
                              {item.status && (
                                <span className={`ml-2 text-xs ${item.statusColor}`}>
                                  {item.status}
                                </span>
                              )}
                            </motion.a>
                          ))}
                        </nav>
                      </motion.div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 