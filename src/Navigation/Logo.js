import React from 'react'

import style from './Logo.styl'

export default () =>
  <div className={style.root}>
    <div className={style.logo}>
      <div className={style.image} />
    </div>
    <div className={style.text}>
      What's for dinner?
    </div>
  </div>
