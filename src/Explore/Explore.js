import React from 'react'
import { connect } from 'react-redux'

import Meal from './Meal'

const Explore = (props) => {
  console.log(props)
  return <div style={{ paddingTop: 70 }}>
    <ul>
      {props.meals.map((m, i) =>
        <Meal title={m.title} des={m.des} key={i} />
      )}
    </ul>
  </div>
}

const mapStateToProps = state => state.explore

export default connect(mapStateToProps)(Explore)
