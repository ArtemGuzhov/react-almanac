import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'
import { Posts } from './pages/Posts'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} exact />
      <Route path="/posts" component={Posts} exact />
      <Redirect to="/posts" />
    </Switch>
  )
}
