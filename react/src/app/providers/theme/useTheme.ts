import { useContext } from 'react'
import { ThemeContext } from 'app/providers/theme/ThemeContext'

export const useTheme = () => useContext(ThemeContext)
