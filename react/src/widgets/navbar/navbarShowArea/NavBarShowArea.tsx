import { memo } from 'react'

import { type NavBarShowAreaProps } from './navBarShowAreaProps.model'

import cls from './navBarShowArea.module.scss'

export const NavBarShowArea = memo(({ ...props }: NavBarShowAreaProps) => {
  return (
    <div className={ cls.wrapper } { ...props } />
  )
})

NavBarShowArea.displayName = 'NavBarShowArea'
