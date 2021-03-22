import React from 'react'
import './App.css'
import { MontserratTheme, AsapTheme } from './components/AppTheme'
import { ThemeProvider } from '@material-ui/core'

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
