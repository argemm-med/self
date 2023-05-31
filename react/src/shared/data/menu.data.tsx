import { Pages } from '@/shared/data/pages.data'
import { GoHome } from 'react-icons/go'
import { IconType } from 'react-icons'

export interface MenuLink {
  to: string
  label: string
  icon?: IconType
}

export const MenuData: MenuLink[] = [
  {
    to: Pages.home,
    label: 'Home page',
    icon: GoHome,
  },
]
