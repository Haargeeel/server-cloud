import React from 'react'

import Logo from './Logo'

import style from './Navigation.styl'

export default () =>
  <div className={style.navigation}>
    <div className={style.wrapper}>
      <Logo />
      <ul className={style.nav}>
        <li>
          test
        </li>
        <li>
          test
        </li>
        <li>
          test
        </li>
      </ul>
    </div>
  </div>
