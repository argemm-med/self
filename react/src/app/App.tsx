import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from 'app/providers/router'
import { Loader } from 'shared/ui/loader/Loader'
import { ThemeProvider } from 'app/providers/theme/ThemeProvider'
import { LayoutProvider } from 'app/providers/layout/LayoutProvider'

export const App = () => {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <Suspense fallback={ <Loader/> }>
          <RouterProvider router={ router }/>
        </Suspense>
      </LayoutProvider>
    </ThemeProvider>
  )
}
