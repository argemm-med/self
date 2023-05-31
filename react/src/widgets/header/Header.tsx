import type { CSSProperties } from 'react'
import { memo } from 'react'
import { VscKebabVertical, VscMenu } from 'react-icons/vsc'

import { LayoutSwitcher } from '@/shared/ui/layoutSwitcher/LayoutSwitcher'
import { ThemeSwitcher } from 'app/providers/theme/themeSwitcher/ThemeSwitcher'
import { type HeaderProps } from './headerProps.model'

import cls from './header.module.scss'

export const Header = memo(({ toggleNav, ...props }: HeaderProps) => {
  const rightBar: CSSProperties = {
    display: 'flex',
    gap: '40px',
  }

  return (
    <header { ...props } className={ `${ cls.wrapper } ${ props.className }` }>
      <button onClick={ toggleNav }>
        <VscMenu className={ cls.icon }/>
      </button>
      <div style={ rightBar }>
        <LayoutSwitcher/>
        <ThemeSwitcher/>
        <button>
          <VscKebabVertical className={ cls.icon }/>
        </button>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
