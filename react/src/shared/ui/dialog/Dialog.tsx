import { type FC, type PropsWithChildren, useEffect } from 'react'

import { type DialogProps } from './dialogProps.model'

import cls from './dialog.module.scss'

export const Dialog: FC<PropsWithChildren<DialogProps>> = (props) => {
  const {
    isVisible,
    handleClose,
    header,
    children,
  } = props

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === 'Escape' ? handleClose() : null
    }

    if (isVisible) document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose, isVisible])

  if (!isVisible) return null

  return (
    <div className={ `${ cls.wrapper } ${ isVisible && cls.active }` }>
      <div className={ `${ cls.content } secondary` }>
        { header &&
          <div className={ cls.header }>
            { header }
          </div> }
        { children }
        <div className={ cls.close } onClick={ handleClose }>&#10005;</div>
      </div>
      <div className="overlay" onClick={ handleClose }/>
    </div>
  )
}
