import * as types from '../Home/action_types'

export const navigation = (state = { isOnTop: true }, action) => {
  switch (action.type) {
    case types.SET_OPAQUE:
      return { isOnTop: false }
    case types.SET_TRANSPARENT:
      return { isOnTop: true }
    default:
      return state
  }
}

