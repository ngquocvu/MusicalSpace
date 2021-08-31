import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Redirect from './pages/Redirect'
import { PageNotFound } from './pages/PageNotFound'
import { Dashboard } from './pages/Dashboard'
import Auth from './pages/Auth'
import { useEffect, useState } from 'react'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Browse from './pages/Browse'
import Layout from './components/Layout'

export const App = () => {
  const [expiryTime, setExpiryTime] = useState(0)
  useEffect(() => {
    setExpiryTime(JSON.parse(localStorage.getItem('expiry_time') || '0'))
    console.log('Chay useEffect App.tsx setExpiryTime')
  }, [])
  const isValidSession = () => {
    let expTime = JSON.parse(localStorage.getItem('expiry_time') || '0')
    const currentTime = new Date().getTime()
    return currentTime < expTime
  }
  return (
    <div className="bg-black min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <Auth
              isValidSession={isValidSession}
              setExpiryTime={setExpiryTime}
            />
          </Route>
          <Route path="/redirect">
            <Redirect
              isValidSession={isValidSession}
              setExpiryTime={setExpiryTime}
            />
          </Route>
          <Route>
            <Layout isValidSession={isValidSession} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
