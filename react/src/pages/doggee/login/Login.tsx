import { Form, Formik } from 'formik'
import { type FC } from 'react'

import { DoggeeLoginForm, INITIAL_DOGGEE_LOGIN, SCHEMA_DOGGEE_LOGIN } from 'entities/doggee/doggeeLogin'
import { type LoginProps } from './loginProps.model'
import { Input } from 'shared/ui/input/Input'

import cls from './login.module.scss'

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
            <span>loging page</span>
            <Input name='username' label='username' />
            <Input name='password' label='password' />
            <button>auth</button>
          </Form>
        </>
      </Formik>
    </div>
  )
}

export default Login
