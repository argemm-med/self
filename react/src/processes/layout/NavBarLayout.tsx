import { Outlet } from 'react-router-dom'
import { memo, Suspense, useState } from 'react'
import { Loader } from '@/shared/ui/loader/Loader'
import { useTheme } from 'app/providers/theme/useTheme'
import { Header } from '@/widgets/header/Header'
import { Navbar } from '@/widgets/navbar/Navbar'

import cls from './navBarLayout.module.scss'

export const NavBarLayout = memo(() => {
  const { theme } = useTheme()
  const [isNavVisible, setIsNavVisible] = useState(true)

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev)
  }

  return (
    <div className={ `app ${ theme } ${ cls.app }` }>
      <Header
        toggleNav={ toggleNav }
        className={ cls.header }
      />
      <div className={ cls.content }>
        <Navbar
          className={ `${ cls.nav } ${ isNavVisible && cls.active }` }
          isVisible={ isNavVisible }
        />
        <main className={ `${ cls.main } ${ isNavVisible && cls.active }  main` }>
          <Suspense fallback={ <Loader/> }>
            <Outlet/>
          </Suspense>
        </main>
      </div>
    </div>
  )
})

NavBarLayout.displayName = 'NavBarLayout'
