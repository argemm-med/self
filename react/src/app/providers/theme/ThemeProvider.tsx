import { type FC, type PropsWithChildren, useMemo, useState } from 'react'
import { ThemeContext, type ThemeContextOptions, type ThemeValueType } from 'app/providers/theme/ThemeContext'
import { LOCAL_STORAGE_KEYS } from 'shared/data/storage.data'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) as ThemeValueType

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, changeTheme] = useState<ThemeValueType>(defaultTheme || 'light')

  const setTheme = (newTheme: ThemeValueType) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, newTheme)
    changeTheme(newTheme)
  }

  const values = useMemo<ThemeContextOptions>(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={ values }>
      { children }
    </ThemeContext.Provider>
  )
}
