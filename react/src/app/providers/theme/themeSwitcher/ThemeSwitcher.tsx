import React, { type FC, memo, type ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { GiMoon } from 'react-icons/gi'

import { type ThemeSwitcherProps } from './themeSwitcherProps.model'
import { type ThemeValueType } from 'app/providers/theme/ThemeContext'
import { useTheme } from 'app/providers/theme/useTheme'

const themes: Array<{ icon: ReactNode, label: ThemeValueType }> = [
  {
    icon: <CiLight className="switcher__icon"/>,
    label: 'light',
  },
  {
    icon: <CiDark className="switcher__icon"/>,
    label: 'dark',
  },
  {
    icon: <GiMoon className="switcher__icon"/>,
    label: 'black',
  },
]

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ ...props }) => {
  const { theme: activeTheme, setTheme: switchTHeme } = useTheme()
  const activeThemeRef = useRef<HTMLButtonElement>(null)
  const [activeThemeConfig, setActiveThemeConfig] = useState({
    width: 0,
    left: 0,
  })

  useLayoutEffect(() => {
    setActiveThemeConfig({
      left: activeThemeRef.current?.offsetLeft ?? 0,
      width: activeThemeRef.current?.clientWidth ?? 0,
    })
  }, [activeTheme])

  const changeTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newTheme: ThemeValueType): void => {
    const { clientWidth, offsetLeft } = event.currentTarget
    setActiveThemeConfig({
      left: offsetLeft,
      width: clientWidth,
    })
    switchTHeme(newTheme)
  }

  return (
    <div className="switcher-wrapper secondary" { ...props }>
      { themes.map((el) => (
        <button
          ref={ el.label === activeTheme ? activeThemeRef : undefined }
          onClick={ (e) => {
            changeTheme(e, el.label)
          } }
          key={ `${ el.icon }${ el.label }` }
          className="switcher__btn"
        >
          { el.icon }
          <span>{ el.label }</span>
        </button>
      )) }
      <div
        className="switcher__btn--active"
        style={ {
          width: activeThemeConfig.width,
          left: activeThemeConfig.left,
        } }
      />
    </div>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
