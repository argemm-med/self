import { useContext } from 'react'

import { LayoutContext } from 'app/providers/layout/LayoutContext'

export const useLayout = () => useContext(LayoutContext)
