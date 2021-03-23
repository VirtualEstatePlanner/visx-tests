import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
import { DrawingBoard } from './components/DrawingBoard/DrawingBoard'
import { Zoomer } from './components/Zoomer/Zoomer'
import { ThresholdDifference } from './components/ThresholdDifference/ThresholdDifference'
import { SomeBarGroup } from './components/SomeBarGroup/SomeBarGroup'
import { IDimensions } from './interfaces/IDimensions'

const dimensions: IDimensions = { width: 720, height: 480 }

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <p>Example @visx components</p>
        <p></p>
        <p>DrawingBoard component</p>
        <p>
          <DrawingBoard data={[]} dimensions={dimensions} />
        </p>
        <p>Zoomer component</p>
        <p>
          <Zoomer dimensions={dimensions} />
        </p>
        <p>Threshold Difference component</p>
        <p>
          <ThresholdDifference dimensions={dimensions} />
        </p>
        <p>Bar Group component</p>
        <p>
          <SomeBarGroup dimensions={dimensions} />
        </p>
        <p></p>
      </ThemeProvider>
    </div>
  )
}
