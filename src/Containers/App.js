import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import head from '../headerConfig'
import { Navigation } from '../Navigation'
import { Footer } from '../Footer'

const App = ({ children }) =>
  <div>
    <Helmet {...head} />
    <Navigation />
    {children}
    <Footer />
  </div>

App.propTypes = {
  children: PropTypes.object
}

export default App
