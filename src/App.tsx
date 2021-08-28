import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Redirect from './pages/Redirect'
import { PageNotFound } from './pages/PageNotFound'
import { Dashboard } from './pages/Dashboard'
import Auth from './pages/Auth'
import { useState } from 'react'

export const App = () => {
  const [expiryTime, setExpiryTime] = useState(
    JSON.parse(localStorage.getItem('expiry_time') || '0')
  )
  const isValidSection = () => {
    const currentTime = new Date().getTime()
    return currentTime < expiryTime
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth isValidSession={isValidSection} setExpiryTime={setExpiryTime} />
        </Route>
        <Route path="/redirect">
          <Redirect
            isValidSession={isValidSection}
            setExpiryTime={setExpiryTime}
          />
        </Route>
        <Route path="/" exact={true}>
          <Dashboard
            isValidSession={isValidSection}
            setExpiryTime={setExpiryTime}
          />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
