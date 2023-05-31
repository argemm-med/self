import { type FC } from 'react'

import { type LoginProps } from './loginProps.model'

import cls from './login.module.scss'

const Login: FC<LoginProps> = () => {
  return (
    <div className={ cls.wrapper }>
      <div className="block">
        <input type="text"/>
      </div>
    </div>
  )
}

export default Login
