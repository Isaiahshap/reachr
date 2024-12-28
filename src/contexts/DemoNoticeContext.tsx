import { createContext, useContext, useState, ReactNode } from 'react'

interface DemoNoticeContextType {
  showDemoNotice: () => void
  hideDemoNotice: () => void
  isNoticeOpen: boolean
}

const DemoNoticeContext = createContext<DemoNoticeContextType | undefined>(undefined)

export function DemoNoticeProvider({ children }: { children: ReactNode }) {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)

  const showDemoNotice = () => setIsNoticeOpen(true)
  const hideDemoNotice = () => setIsNoticeOpen(false)

  return (
    <DemoNoticeContext.Provider value={{ showDemoNotice, hideDemoNotice, isNoticeOpen }}>
      {children}
    </DemoNoticeContext.Provider>
  )
}

export function useDemoNotice() {
  const context = useContext(DemoNoticeContext)
  if (context === undefined) {
    throw new Error('useDemoNotice must be used within a DemoNoticeProvider')
  }
  return context
} 