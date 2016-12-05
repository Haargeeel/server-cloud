import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './Containers/App'
import { Home } from './Home'
import { Add } from './Add'
import { Explore } from './Explore'

export default () => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='meals' component={Explore} />
      <Route path='meals/add' component={Add} />
    </Route>
  )
}
