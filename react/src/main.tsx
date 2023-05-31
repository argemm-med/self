import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import { App } from 'app/App'

import 'app/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
