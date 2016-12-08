import React from 'react'

import style from './Footer.styl'

export default () =>
  <div className={style.footer}>
    <div className={style.wrapper}>
      <p>
        This website should be running in the cloud. It is its only purpose.
      </p>
      <p>
        I'm exploring the clouds to look for this on specific degree. ♥
      </p>
      <p className={style.links}>
        <span>Check out my way up: </span>
        <a href='https://github.com/Haargeeel/cloudarchitecture'>
          <img src='https://packagecontrol.io/readmes/img/a59a44b1a383ad42e195fa34f0ad2756f46c77a2.png' />
        </a>
        <span> and here: </span>
        <a href='https://hub.docker.com/u/haargeeel/'>
          <img src='https://global.download.synology.com/download/Package/img/Docker/1.11.2-0268/thumb_256.png' />
        </a>
      </p>
    </div>
  </div>
