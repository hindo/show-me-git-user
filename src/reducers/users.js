import { REQUEST_USERS, RECEIVED_USERS } from '../actions/users'

const users = (state = {
  isFetching: false,
  users: []
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVED_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
        lastUpdate: action.receivedAt
      }
    default:
      return state
  }
}

export default users
