import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { Footer } from '../Footer'
import * as actions from './actions'

import style from './Home.styl'

const cx = classNames.bind(style)

class Home extends Component {

  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.ticking = false
  }

  componentDidMount () {
    this.el.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.el.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const { setNavOpaque, setNavTransparent } = this.props.actions
        const { isOnTop } = this.props
        const scrollTop = this.el.pageYOffset || this.el.scrollTop
        if (isOnTop && scrollTop > 200) setNavOpaque()
        if (!isOnTop && scrollTop < 200) setNavTransparent()
        this.ticking = false
      })
    }
    this.ticking = true
  }

  render () {
    const { content } = this.props
    return (
      <div className={style.home} ref={div => { this.el = div }}>
        <div className={style.group}>
          <div className={cx('layer', 'base')} />
          <div className={cx('layer', 'back', 'burger')} />
        </div>
        <div className={cx('group', 'front')}>
          <div className={cx('layer', 'base')}>
            <div style={{ color: '#333333' }}>
              <h2>What's for dinner?</h2>
              <p>I asked myself the same question so many times but you are not living with Mommy anymore</p>
              <p>This small site gives you the push you need to start cooking</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.landing,
  ...state.navigation
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
