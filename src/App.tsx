import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
import { DrawingBoard } from './components/DrawingBoard/DrawingBoard'
import { Zoomer } from './components/Zoomer/Zoomer'

const dimensions: number[] = [720, 480]

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <p>
          DrawingBoard component
          <DrawingBoard data={[]} width={dimensions[0]} height={dimensions[1]} />
        </p>
        <p>
          Zoomer component
          <Zoomer width={dimensions[0]} height={dimensions[1]} />
        </p>
      </ThemeProvider>
    </div>
  )
}
