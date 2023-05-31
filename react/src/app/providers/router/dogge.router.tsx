import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

import { DoggeePages } from 'entities/doggee/doggee.pages'

const Login = lazy(() => import('pages/doggee/login/Login'))

export const doggeRouter: RouteObject[] = [
  {
    path: DoggeePages.login,
    element: <Login/>,
  },
]
