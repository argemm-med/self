import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

import { Pages } from 'shared/data/pages.data'

const DoggeeLayout = lazy(() => import('pages/doggee/Doggee'))
const Home = lazy(() => import('pages/doggee/home/Home'))
const Login = lazy(() => import('pages/doggee/login/Login'))

export const doggeRouter: RouteObject[] = [
  {
    path: Pages.doggee.index,
    element: <DoggeeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: Pages.doggee.login, element: <Login /> },
    ],
  },
]
