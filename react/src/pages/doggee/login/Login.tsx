import { Form, Formik } from 'formik'
import { type FC } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'

import { type DoggeeLoginForm, INITIAL_DOGGEE_LOGIN, SCHEMA_DOGGEE_LOGIN } from 'entities/doggee/doggeeLogin'
import { type LoginProps } from './loginProps.model'
import { Input } from 'shared/ui/input/Input'

import cls from './login.module.scss'
import { Button } from 'shared/ui/button/Button'

const Login: FC<LoginProps> = () => {
  const onSubmit = (values: DoggeeLoginForm) => {
    console.log(values)
  }

  return (
    <div className={ cls.wrapper }>
      <Formik
        initialValues={ INITIAL_DOGGEE_LOGIN }
        onSubmit={ onSubmit }
        validationSchema={ SCHEMA_DOGGEE_LOGIN }
      >
        <>
          <Form className={ `${ cls.block } secondary-block` }>
            <span className='test'>loging page</span>
            <Input
              autoFocus
              name='username'
              label='username'
              preIcon={ <MdAlternateEmail /> }
            />
            <Input
              name='password'
              label='password'
              preIcon={ <RiLockPasswordLine /> }
              type='password'
            />
            <Button label='auth button' />
          </Form>
        </>
      </Formik>
    </div>
  )
}

export default Login
