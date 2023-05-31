import { useLayout } from 'app/providers/layout/useLayout'
import { MenuLayout } from '@/processes/layout/MenuLayout'
import { NavBarLayout } from '@/processes/layout/NavBarLayout'

export const DefaultLayout = () => {
  const { layoutType } = useLayout()

  return (
    <>
      { layoutType === 'menu'
        ? <MenuLayout/>
        : <NavBarLayout/>
      }
    </>
  )
}
