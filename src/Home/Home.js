import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    const { test } = this.props
    return (
      <div style={{ minHeight: '100%', height: '100%' }}>
        { test }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.landing
}

export default connect(mapStateToProps)(Home)
