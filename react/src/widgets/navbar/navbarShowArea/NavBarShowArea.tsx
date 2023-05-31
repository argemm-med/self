import { memo } from 'react'

import { type NavBarShowAreaProps } from './navBarShowAreaProps.model'
import type { ReadonlyProps } from '@/shared/types/commonTypes'

import cls from './navBarShowArea.module.scss'

export const NavBarShowArea = memo(({ ...props }: ReadonlyProps<NavBarShowAreaProps>) => {
  return (
    <div className={ cls.wrapper } { ...props }/>
  )
})

NavBarShowArea.displayName = 'NavBarShowArea'
