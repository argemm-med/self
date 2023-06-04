import { object, string } from 'yup'

export interface DoggeeLoginForm {
  username: string
  password: string
}

export const INITIAL_DOGGEE_LOGIN: DoggeeLoginForm = {
  password: '',
  username: '',
}

export const SCHEMA_DOGGEE_LOGIN = object().shape({
  password: string()
    .min(6)
    .required(),
  username: string()
    .min(4)
    .required(),
})
