import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconClose } from './icons'

interface DemoNoticeProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoNotice({ isOpen, onClose }: DemoNoticeProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-0 pr-4 pt-4"
                    >
                      <button
                        type="button"
                        className="rounded-lg text-gray-400 hover:text-gray-500 transition-colors"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close</span>
                        <IconClose className="h-6 w-6" />
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-center"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2 
                          }}
                        >
                          <span className="text-2xl">👋</span>
                        </motion.div>
                      </div>
                      
                      <Dialog.Title 
                        as="h3" 
                        className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent text-3xl font-bold mb-4"
                      >
                        Demo Site Notice
                      </Dialog.Title>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-gray-600 mb-4">
                          This is a demo SaaS site, part of the 7 Days of Web Build series by Yeshaya.dev.
                        </p>
                        <p className="text-gray-600">
                          Want a sleek app like this? Let's build something amazing together!
                        </p>
                      </motion.div>

                      <motion.div 
                        className="mt-8 space-y-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <a
                          href="https://yeshaya.dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-600/25"
                        >
                          Visit Yeshaya.dev
                        </a>
                        <button
                          onClick={onClose}
                          className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
                        >
                          Maybe Later
                        </button>
                      </motion.div>
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