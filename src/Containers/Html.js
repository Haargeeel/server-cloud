import React, { Component, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'

const style = {
  minHeight: '100%',
  position: 'relative',
  margin: 0,
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif'
}

class Html extends Component {
  render() {
    const { assets, component, store } = this.props
    const content = component ? renderToString(component) : ''
    const head = Helmet.rewind();
    const attrs = head.htmlAttributes.toComponent()

    return(
      <html {...attrs}>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {Object
            .keys(assets.styles)
            .map((style, i) =>
              <link
                href={assets.styles[style]}
                key={i}
                type='text/css'
                rel='stylesheet'
              />
            )
          }
        </head>
        <body style={style}>
          <div id='root' dangerouslySetInnerHTML={{ __html: content }}></div>
          <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())}` }} />
          {Object
            .keys(assets.javascript)
            .map((script, i) => 
              <script
                src={assets.javascript[script]}
                key={i}
              />
            )
          }
        </body>
      </html>
    )
  }
}

Html.PropTypes = {
  assets: PropTypes.object,
  component: PropTypes.object,
  store: PropTypes.object
}

export default Html

