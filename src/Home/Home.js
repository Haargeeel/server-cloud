import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './Home.styl'

class Home extends Component {
  render () {
    const { content } = this.props
    return (
      <div className={style.home}
        style={{ minHeight: '100%', height: '100%' }}>
        <div className={style.wrapper}>
          {content.map((c, i) =>
            <div className={style.content} key={i}>
              <div className={style.imageWrapper}>
                <div className={style.image} />
              </div>
              <div className={style.textWrapper}>
                <div className={style.text}>
                  {c.text}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.landing
}

export default connect(mapStateToProps)(Home)
