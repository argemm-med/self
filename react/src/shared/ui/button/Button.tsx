import { type FC } from 'react'

import { type ButtonProps } from './buttonProps.model'

import cls from './button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
  const { label, disabled } = props

  return (
    <button
      className={ `${ cls.button } ${ disabled && cls.disabled }` }
    >
      { label }
    </button>
  )
}
