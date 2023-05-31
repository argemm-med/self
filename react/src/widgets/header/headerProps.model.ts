import type { HTMLProps } from 'react'

export interface HeaderProps extends HTMLProps<HTMLDivElement> {
  toggleNav?: () => void
}
