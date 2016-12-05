import React from 'react'

import Logo from './Logo'

import style from './Navigation.styl'

export default () =>
  <div className={style.navigation}>
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
