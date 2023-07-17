import { store } from '@/store'
import theme from '@/styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
