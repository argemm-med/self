import { createPortal } from 'react-dom'
import type { FC, PropsWithChildren } from 'react'
import type { PortalProps } from '@/shared/ui/portal/portalProps.model'

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ to, children }) => {
  return createPortal(children, to)
}
