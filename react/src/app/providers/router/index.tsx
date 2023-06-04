import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { DefaultLayout } from 'app/providers/layout/DefaultLayout'
import { Pages } from 'shared/data/pages.data'
import { doggeRouter } from 'app/providers/router/dogge.router'

const Home = lazy(async () => await import('pages/home/Home'))
const NotFound = lazy(async () => await import('pages/notFound/NotFound'))

export const router = createBrowserRouter([
  {
    path: Pages.home,
    element: <DefaultLayout/>,
    children: [
      { index: true, element: <Home/> },
      ...doggeRouter,
    ],
  },
  {
    path: '*',
    element: <NotFound/>,
  },
])
