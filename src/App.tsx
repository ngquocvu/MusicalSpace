import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Redirect from './pages/Redirect'
import { PageNotFound } from './pages/PageNotFound'
import { Dashboard } from './pages/Dashboard'
import Auth from './pages/Auth'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/redirect" component={Redirect} />
        <Route path="/" component={Dashboard} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
