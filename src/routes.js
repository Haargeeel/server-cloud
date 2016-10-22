import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './Containers/App'
import { Home } from './Home'

export default () => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  )
}
