import { useField } from 'formik'
import React, { memo, useId, useState } from 'react'

import { type InputProps } from './inputProps.model'

import cls from './input.module.scss'

export const Input = memo((props: InputProps) => {
  const { label, ...attr } = props
  const id = useId()
  const [field, meta] = useField(attr as string)
  const [active, setActive] = useState(false)

  const handleFocus = () => {
    setActive(true)
  }

  return (
    <div
      className={ `${ active && cls.active } ${ meta.touched && meta.error && cls.error } ${ cls['float-wrapper'] }` }>
      <label htmlFor={ id }>
        { label }&emsp;
        { meta.touched && meta.error && <small>{ meta.error }</small> }
      </label>
      <input
        id={ id }
        type={ attr.type ?? 'text' }
        onFocus={ handleFocus }
        { ...field }
        { ...meta }
      />
    </div>
  )
})

Input.displayName = 'Input'
