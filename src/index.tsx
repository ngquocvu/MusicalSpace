import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes/default'
import GlobalStyle from './global'
import store from './store'
import './styles.css'

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
