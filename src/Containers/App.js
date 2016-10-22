import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import head from '../headerConfig'

const App = ({ children }) =>
  <div>
    <Helmet {...head} />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.object
}

export default App
