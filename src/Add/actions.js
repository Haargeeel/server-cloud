import axios from 'axios'

import * as types from './action_types'

const makeRequest = meal =>
  axios.post('/meals', meal)

export const save = meal =>
  dispatch =>
    makeRequest(meal)
    .then(res => dispatch(saveSuccess(res.data)))
    .catch(() => dispatch(saveFailure('Save error')))

const saveSuccess = meal => ({
  type: types.SAVE,
  meal
})

const saveFailure = err => ({
  type: types.SAVE,
  err
})
