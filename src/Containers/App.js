import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import head from '../headerConfig'
import { Navigation } from '../Navigation'

const App = ({ children }) =>
  <div>
    <Helmet {...head} />
    <Navigation />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.object
}

export default App
