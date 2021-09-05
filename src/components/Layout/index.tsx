import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageNotFound } from '../../pages/PageNotFound'
import { Header } from '../Header'
import Loading from '../Loading'
import MusicControl from '../MusicControler'

interface LayoutProps {
  isValidSession: () => boolean
}
const Search = React.lazy(() => import('../../pages/Search'))
const Browse = React.lazy(() => import('../../pages/Browse'))
const Profile = React.lazy(() => import('../../pages/Profile'))
const Playlist = React.lazy(() => import('../../pages/Playlist'))
const Layout = ({ isValidSession }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="p-2 pb-24">
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
            <Route path="/playlist/:id">
              <Playlist isValidSession={isValidSession} />
            </Route>
            <Route path="/top" exact={true}></Route>
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
      <MusicControl />
    </>
  )
}

export default Layout
