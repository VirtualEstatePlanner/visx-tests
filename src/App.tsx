import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
import { DrawingBoard } from './components/DrawingBoard/DrawingBoard'
import { Zoomer } from './components/Zoomer/Zoomer'

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <p>
          DrawingBoard component
          <DrawingBoard data={[]} width={1080} height={720} />
        </p>
        <p>
          Zoomer component
          <Zoomer width={1080} height={720} />
        </p>
      </ThemeProvider>
    </div>
  )
}
