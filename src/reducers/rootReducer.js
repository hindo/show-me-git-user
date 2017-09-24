import { combineReducers } from 'redux'

import users from './users'

export default combineReducers({
  users,
  user: () => ({}),
  since: () => (0)
})
