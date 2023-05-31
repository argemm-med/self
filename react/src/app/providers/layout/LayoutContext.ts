import { createContext } from 'react'

export interface LayoutContextProps {
  layoutType: 'menu' | 'navbar'
  setLayout: (newValue: LayoutContextProps['layoutType']) => void
}

export const LayoutContext = createContext<LayoutContextProps>({
  layoutType: 'menu',
  setLayout: () => {
    console.log()
  },
})
