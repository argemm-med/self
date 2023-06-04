import { type IconType } from 'react-icons'
import { GoHome } from 'react-icons/go'
import { FaDog } from 'react-icons/fa'
import { Pages } from '@/shared/data/pages.data'

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
  {
    to: Pages.doggee.index,
    label: 'Doggee',
    icon: FaDog,
  },
]
