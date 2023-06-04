import { type FC, type PropsWithChildren, useMemo, useState } from 'react'

import { LayoutContext, type LayoutContextProps } from 'app/providers/layout/LayoutContext'
import { LOCAL_STORAGE_KEYS } from 'shared/data/storage.data'

const defaultLayout = localStorage.getItem(LOCAL_STORAGE_KEYS.layout) as LayoutContextProps['layoutType'] || 'menu'

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [layout, changeLayout] = useState<LayoutContextProps['layoutType']>(defaultLayout)

  const setLayout = (newValue: LayoutContextProps['layoutType']) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.layout, newValue)
    changeLayout(newValue)
  }

  const values = useMemo<LayoutContextProps>(() => ({
    layoutType: layout,
    setLayout,
  }), [layout])

  return (
    <LayoutContext.Provider value={ { ...values } }>
      { children }
    </LayoutContext.Provider>
  )
}
