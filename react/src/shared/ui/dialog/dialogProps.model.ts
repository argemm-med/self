import type { DialogHTMLAttributes, ReactNode } from 'react'

export interface DialogProps extends DialogHTMLAttributes<HTMLDivElement> {
  isVisible: boolean
  handleClose: () => void
  header?: ReactNode
}
