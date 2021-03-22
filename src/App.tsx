import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
import { SimpleBarGraph } from './components/SimpleBarGraph'

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <header className='App-header'></header>
        <body>
          <SimpleBarGraph />
        </body>
      </ThemeProvider>
    </div>
  )
}
