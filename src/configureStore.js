import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducer'

export default (initialState, history) => {
  const middleware = [thunk, routerMiddleware(history)]
  let store

  /*eslint-disable */
  if (__DEVELOPMENT__) {
    middleware.push(createLogger())
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
    ))
  } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
  }

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = rootReducer.default
      store.replaceReducer(nextReducer)
    })
  }
  /*eslint-enable */

  return store
}
