import React, { memo, useId, useState } from 'react'

import { type InputProps } from './inputProps.model'

import cls from './input.module.scss'

export const Input = memo((props: InputProps) => {
  const { label, error, ...attr } = props
  const id = useId()
  const [active, setActive] = useState(false)

  const handleFocus = () => {
    setActive(true)
  }

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value) return false
    else setActive(false)
  }

  return (
    <div className={ `${ active && cls.active } ${ error && cls.error } ${ cls['float-wrapper'] }` }>
      <label htmlFor={ id }>
        { label }&emsp;
        { error ?? <small>{ error }</small> }
      </label>
      <input
        id={ id }
        type={ attr.type ?? 'text' }
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        { ...attr }
      />
    </div>
  )
})

Input.displayName = 'Input'
