import React from 'react'
import { AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'
//import { ReactiveContainer } from './components/ReactiveContainer/ReactiveContainer'
//<ReactiveContainer />

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={AsapTheme}>
        <header className='App-header'></header>
        <body></body>
      </ThemeProvider>
    </div>
  )
}
