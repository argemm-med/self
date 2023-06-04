import type { HTMLProps } from 'react'
import { memo } from 'react'
import { MenuData } from '@/shared/data/menu.data'

import styles from './main.module.scss'
import { NavLink } from '@/widgets/navbar/navLink/NavLink'

interface NavbarProps extends HTMLProps<HTMLDivElement> {
  isVisible: boolean
  overlay?: boolean
  onClose?: () => void
}

export const Navbar = memo(({ isVisible, overlay = false, onClose, ...props }: NavbarProps) => {
  return (
    <>
      <nav
        { ...props }
        className={ `${ styles.nav } ${ props.className } secondary` }
      >
        <ul>
          { MenuData.map(el => (
            <div key={ el.label } className={ styles['list-item'] }>
              <NavLink
                { ...el }
                onNavigate={ onClose }
              />
            </div>
          )) }
        </ul>
      </nav>
      {
        isVisible && overlay &&
        <div onClick={ onClose } className="overlay"/>
      }
    </>
  )
})

Navbar.displayName = 'Navbar'
