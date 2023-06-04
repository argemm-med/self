import { type HTMLAttributes, memo, useMemo } from 'react'
import { RiPagesLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { type MenuLink } from '@/shared/data/menu.data'

import styles from './main.module.scss'

interface NavLinkProps extends MenuLink, HTMLAttributes<HTMLAnchorElement> {
  onNavigate?: () => void
}

export const NavLink = memo(({ to, icon, label, onNavigate, ...props }: NavLinkProps) => {
  const Icon = icon
  const location = useLocation()

  const isCurrentPath = useMemo(() => {
    return location.pathname === to
  }, [location.pathname, to])

  return (
    <Link
      to={ to }
      { ...props }
      onClick={ onNavigate }
      className={ `${ styles.link } ${ isCurrentPath && styles.active }` }
    >
      <span>{ <Icon/> ?? <RiPagesLine/> }</span>
      { label }
    </Link>
  )
})

NavLink.displayName = 'NavLink'
