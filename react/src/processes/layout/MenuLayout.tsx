import { Outlet } from 'react-router-dom'
import { memo, Suspense, useCallback, useState } from 'react'
import { Loader } from '@/shared/ui/loader/Loader'
import { Header } from '@/widgets/header/Header'
import { useTheme } from 'app/providers/theme/useTheme'
import { Navbar } from '@/widgets/navbar/Navbar'

import cls from './menuLayout.module.scss'
import { NavBarShowArea } from '@/widgets/navbar/navbarShowArea/NavBarShowArea'

export const MenuLayout = memo(() => {
  const { theme } = useTheme()
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNav = useCallback(() => {
    setIsNavVisible((prev) => !prev)
  }, [])

  return (
    <div className={ `app ${ theme } ${ cls.app }` }>
      <Header className={ cls.header } toggleNav={ toggleNav }/>
      <div className={ cls.content }>
        <Navbar
          overlay
          onClose={ () => {
            setIsNavVisible(false)
          } }
          className={ `${ cls.nav } ${ isNavVisible && cls.active }` }
          isVisible={ isNavVisible }
        />
        <main className={ `${ cls.main } ${ isNavVisible && cls.active }  main` }>
          <Suspense fallback={ <Loader/> }>
            <Outlet/>
          </Suspense>
        </main>
      </div>
      <NavBarShowArea onMouseEnter={ () => {
        setIsNavVisible(true)
      } }/>
    </div>
  )
})

MenuLayout.displayName = 'MenuLayout'
