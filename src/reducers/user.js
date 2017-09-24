import { REQUEST_USER, RECEIVED_USER } from '../actions/user'

const user = (state = {
  isFetching: false,
  details: {}
}, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVED_USER:
      return {
        ...state,
        isFetching: false,
        details: action.user,
        receivedAt: action.receivedAt
      }
    default:
      return state
  }
}

export default user
