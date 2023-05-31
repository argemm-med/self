import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import { DoggeeApp } from './app/DoggeeApp.tsx'

import './app/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DoggeeApp/>
  </StrictMode>,
)
