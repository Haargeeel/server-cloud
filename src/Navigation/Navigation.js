import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Logo from './Logo'

import style from './Navigation.styl'

const cx = classNames.bind(style)

class Navigation extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div className={cx('navigation', { glass: this.props.isOnTop })}>
      <div className={style.wrapper}>
        <a href='/'>
          <Logo />
        </a>
        <ul className={style.nav}>
          <li>
            <a href='/meals/add'>
              <span className={style.color} />
              <span className={style.text}>
                Add a meal
              </span>
            </a>
          </li>
          <li>
            <a href='/meals'>
              <span className={style.color} />
              <span className={style.text}>
                Explore
              </span>
            </a>
          </li>
          <li>
            <a>
              <span className={style.color} />
              <span className={style.text}>
                Get a dish
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  }
}

const mapStateToProps = (state) =>
  state.navigation

export default connect(mapStateToProps)(Navigation)
