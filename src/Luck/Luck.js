import React from 'react'
import { connect } from 'react-redux'

import Meal from './Meal'

const Luck = ({ meal }) => {
  return <div style={{ paddingTop: 70 }}>
    <ul>
      <Meal title={meal.title} des={meal.des} />
    </ul>
  </div>
}

const mapStateToProps = state => state.luck

export default connect(mapStateToProps)(Luck)
