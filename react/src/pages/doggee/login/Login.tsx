import { type FC } from 'react'

import { type LoginProps } from './loginProps.model'

import cls from './login.module.scss'
import { Input } from 'shared/ui/input/Input'

const Login: FC<LoginProps> = () => {
  return (
    <div className={ cls.wrapper }>
      <div className={ `${ cls.block } secondary-block` }>
        <span>
          loging page
        </span>
        <Input label='username' />
        <Input label='password' />
        <button>auth</button>
      </div>
    </div>
  )
}

export default Login
