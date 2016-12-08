const me = module.exports = {}

import React from 'react'
import { Provider } from 'react-redux'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { renderToString } from 'react-dom/server'
import { createRoute, configureStore, Html } from '../../src'

me.render= (req, res, next) => {

  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh()
  }

  const history = createMemoryHistory(req.originalUrl)
  const store = configureStore(req.initialState, history)
  const routes = createRoute(store)
  const emptyAssetsPlaceholder = {
    styles: {},
    javascript: {}
  }
  match({ routes, location: req.url, history }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search)
    } else if (props) {
      const component = (
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      )

      try {
        res.status(200).send('<!doctype html>\n' +
          renderToString(<Html 
            assets={webpackIsomorphicTools.assets
              ? webpackIsomorphicTools.assets()
              : emptyAssetsPlaceholder}
              component={component}
              store={store}
            />)
        )
      } catch (e) {
        console.error(new Date(), e)
        next(e)
      }
    } else {
      res.status(404).end()
    }
  })
};

/**
 *  * Creates the tree with the initial state to configure the redux store
 *   */
me.buildInitialState = (req, res, next) => {
  req.initialState = {
    explore: {
      meals: req.meals
    },
    landing: {
      test: 'empty',
      content: [
        {
          image: 'burger',
          text: 'Rem quia expedita quos laborum voluptates nisi. Reiciendis omnis aliquid impedit ut est aut ea dolores. Eius velit tempore vitae ipsam sit. Expedita est vel iure commodi. Fugit maiores cupiditate molestias corrupti quam impedit autem consequuntur.'
        },
        {
          image: 'pasta',
          text: 'Rem quia expedita quos laborum voluptates nisi. Reiciendis omnis aliquid impedit ut est aut ea dolores. Eius velit tempore vitae ipsam sit. Expedita est vel iure commodi. Fugit maiores cupiditate molestias corrupti quam impedit autem consequuntur.'
        },
        {
          image: 'teig',
          text: 'Rem quia expedita quos laborum voluptates nisi. Reiciendis omnis aliquid impedit ut est aut ea dolores. Eius velit tempore vitae ipsam sit. Expedita est vel iure commodi. Fugit maiores cupiditate molestias corrupti quam impedit autem consequuntur.'
        }
      ]
    }
  }
  next()
}

