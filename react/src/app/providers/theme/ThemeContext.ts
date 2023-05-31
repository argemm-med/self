import { createContext } from 'react'

const Theme = Object.freeze({
  BLACK: 'black',
  LIGHT: 'light',
  DARK: 'dark',
})

export type ThemeValueType = typeof Theme[keyof typeof Theme]

export interface ThemeContextOptions {
  theme: ThemeValueType
  setTheme: (newTheme: ThemeValueType) => void
}

export const ThemeContext = createContext<ThemeContextOptions>({
  theme: 'light',
  setTheme: () => {
  },
})
