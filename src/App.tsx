import { BrowserRouter, Route, Switch } from 'react-router-dom'

import React, { Suspense } from 'react'

export const App = () => {
  const LayoutPage = React.lazy(() => import('./components/Layout'))
  const RedirectPage = React.lazy(() => import('./pages/Redirect'))
  const AuthPage = React.lazy(() => import('./pages/Auth'))
  const isValidSession = () => {
    let expTime = JSON.parse(localStorage.getItem('expiry_time') || '0')
    const currentTime = new Date().getTime()
    return currentTime < expTime
  }
  return (
    <div className="bg-gray-900 min-h-screen">
      <Suspense fallback={<div></div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/auth">
              <AuthPage isValidSession={isValidSession} />
            </Route>
            <Route path="/redirect">
              <RedirectPage isValidSession={isValidSession} />
            </Route>
            <Route>
              <LayoutPage isValidSession={isValidSession} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}
