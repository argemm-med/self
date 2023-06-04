import { type FC } from 'react'

import { type HomeProps } from './homeProps.model'

import cls from './home.module.scss'

const Home: FC<HomeProps> = () => {
  return (
    <div className={ cls.wrapper }>
      <h1>doggee home page</h1>
    </div>
  )
}

export default Home
