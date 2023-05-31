import { type FC, useRef } from 'react'

import { type RenderCounterProps } from './renderCounterProps.model'

import cls from './renderCounter.module.scss'

export const RenderCounter: FC<RenderCounterProps> = () => {
  const counter = useRef(0)
  counter.current = counter.current + 1

  return (
    <div className={ cls.counter }>{ counter.current }</div>
  )
}
