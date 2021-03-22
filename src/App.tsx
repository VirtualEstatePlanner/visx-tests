import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
import { DrawingBoard } from './components/DrawingBoard/DrawingBoard'

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <p>
          DrawingBoard component
          <DrawingBoard data={[]} width={720} height={480} />
        </p>
      </ThemeProvider>
    </div>
  )
}
