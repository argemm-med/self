import React, { type FC, memo, type ReactNode, useLayoutEffect, useRef, useState } from 'react'

import { type LayoutSwitcherProps } from './layoutSwitcherProps.model'
import { AiOutlineLayout } from 'react-icons/ai'
import { BsSegmentedNav } from 'react-icons/bs'
import { RenderCounter } from '@/shared/ui/renderCounter/RenderCounter'
import { LayoutContextProps } from 'app/providers/layout/LayoutContext'
import { useLayout } from 'app/providers/layout/useLayout'

const layouts: Array<{ icon: ReactNode, label: string, value: LayoutContextProps['layoutType'] }> = [
  {
    icon: <BsSegmentedNav className="switcher__icon"/>,
    label: '',
    value: 'menu',
  },
  {
    icon: <AiOutlineLayout className="switcher__icon"/>,
    label: '',
    value: 'navbar',
  },
]

export const LayoutSwitcher: FC<LayoutSwitcherProps> = memo(({ ...props }) => {
  const { layoutType, setLayout } = useLayout()
  const activeBtnRef = useRef<HTMLButtonElement>(null)
  const [activeBtnConfig, setActiveBtnConfig] = useState({
    width: 0,
    left: 0,
  })

  useLayoutEffect(() => {
    setActiveBtnConfig({
      left: activeBtnRef.current?.offsetLeft ?? 0,
      width: activeBtnRef.current?.clientWidth ?? 0,
    })
  }, [layoutType])

  const changeLayout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newLayout: LayoutContextProps['layoutType']): void => {
    const { clientWidth, offsetLeft } = event.currentTarget
    setActiveBtnConfig({
      left: offsetLeft,
      width: clientWidth,
    })
    setLayout(newLayout)
  }

  return (
    <div className="switcher-wrapper secondary" { ...props }>
      <RenderCounter/>
      { layouts.map((el) => (
        <button
          ref={ el.value === layoutType ? activeBtnRef : undefined }
          onClick={ (e) => {
            changeLayout(e, el.value)
          } }
          key={ `${ el.icon }${ el.value }` }
          className="switcher__btn"
        >
          { el.icon }
          <span>{ el.label }</span>
        </button>
      )) }
      <div
        className="switcher__btn--active"
        style={ {
          width: activeBtnConfig.width,
          left: activeBtnConfig.left,
        } }
      />
    </div>
  )
})

LayoutSwitcher.displayName = 'LayoutSwitcher'
