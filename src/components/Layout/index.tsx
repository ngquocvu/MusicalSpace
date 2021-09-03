import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageNotFound } from '../../pages/PageNotFound'
import { Header } from '../Header'
import Loading from '../Loading'

interface LayoutProps {
  isValidSession: () => boolean
}
const Search = React.lazy(() => import('../../pages/Search'))
const Browse = React.lazy(() => import('../../pages/Browse'))
const Profile = React.lazy(() => import('../../pages/Profile'))
const Layout = ({ isValidSession }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="p-2">
        <Suspense fallback={<Loading />}>
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
            <Route path="/top" exact={true}></Route>
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
    </>
  )
}

export default Layout
