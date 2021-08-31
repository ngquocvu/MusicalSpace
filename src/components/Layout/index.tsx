import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Browse from '../../pages/Browse'
import { Dashboard } from '../../pages/Dashboard'
import { PageNotFound } from '../../pages/PageNotFound'
import Profile from '../../pages/Profile'
import Search from '../../pages/Search'
import { Header } from '../Header'

interface LayoutProps {
  isValidSession: () => boolean
}

const Layout = ({ isValidSession }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="p-4">
        <Switch>
          <Route path="/search">
            <Search isValidSession={isValidSession} />
          </Route>
          <Route exact path="/">
            <Browse isValidSession={isValidSession} />
          </Route>
          <Route path="/profile">
            <Profile isValidSession={isValidSession} />
          </Route>
          <Route component={PageNotFound} />
          <Route path="/top" exact={true}>
            <Dashboard isValidSession={isValidSession} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Layout
