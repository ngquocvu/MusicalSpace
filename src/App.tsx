import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Redirect from './pages/Redirect'
import { NotFound } from './pages/NotFound'
import { Dashboard } from './pages/Dashboard'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/redirect" component={Redirect} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
