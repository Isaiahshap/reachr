import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface DemoNoticeProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoNotice({ isOpen, onClose }: DemoNoticeProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[100]" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-[100] overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                      <button
                        type="button"
                        className="rounded-lg bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="text-center"
                    >
                      <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900 mb-4">
                        👋 Demo Site Notice
                      </Dialog.Title>
                      <div className="mt-4">
                        <p className="text-gray-600 mb-4">
                          This is a demo SaaS site, part of the 7 Days of Web Build series by Yeshaya.dev.
                        </p>
                        <p className="text-gray-600">
                          Please contact Yeshaya for more information or if you want a sleek app like this!
                        </p>
                      </div>

                      <div className="mt-8">
                        <a
                          href="https://yeshaya.dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 transition-all duration-200 hover:scale-105"
                        >
                          Visit Yeshaya.dev
                        </a>
                      </div>
                    </motion.div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </AnimatePresence>
  )
} 