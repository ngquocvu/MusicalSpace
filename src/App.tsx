import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Redirect from './pages/Redirect'
import { PageNotFound } from './pages/PageNotFound'
import { Dashboard } from './pages/Dashboard'
import Auth from './pages/Auth'
import { useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Browse from './pages/Browse'

export const App = () => {
  const [expiryTime, setExpiryTime] = useState(0)
  useEffect(() => {
    setExpiryTime(JSON.parse(localStorage.getItem('expiry_time') || '0'))
    console.log('Chay useEffect App.tsx setExpiryTime')
  }, [])
  const isValidSection = () => {
    const currentTime = new Date().getTime()
    return currentTime < expiryTime
  }
  return (
    <div className="bg-black p-4 min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <Auth
              isValidSession={isValidSection}
              setExpiryTime={setExpiryTime}
            />
          </Route>
          <Route path="/redirect">
            <Redirect
              isValidSession={isValidSection}
              setExpiryTime={setExpiryTime}
            />
          </Route>
          <Route path="/top" exact={true}>
            <Dashboard
              isValidSession={isValidSection}
              setExpiryTime={setExpiryTime}
            />
          </Route>
          <Route path="/profile">
            <Profile isValidSession={isValidSection} />
          </Route>
          <Route path="/search">
            <Search isValidSession={isValidSection} />
          </Route>
          <Route path="/">
            <Browse isValidSession={isValidSection} />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
