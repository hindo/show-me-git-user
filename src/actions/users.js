import { getList, getMore } from '../api/users'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVED_USERS = 'RECEIVED_USERS'
export const RECEIVED_MORE_USERS = 'RECEIVED_MORE_USERS'

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receivedUsers = (users) => ({
  type: RECEIVED_USERS,
  users,
  receivedAt: Date.now()
})

export const receivedMoreUsers = (users) => ({
  type: RECEIVED_MORE_USERS,
  users,
  receivedAt: Date.now()
})

const getUsers = () => (dispatch) => {
  dispatch(requestUsers())
  return getList().then(response => {
    const users = response.data
    dispatch(receivedUsers(users))
  })
}

export const getOrReturnUsers = () => (dispatch, getState) => {
  const state = getState()

  if (!state.users) {
    return dispatch(getUsers())
  }

  if (!state.users.users.length && !state.users.isFetching) {
    return dispatch(getUsers())
  }
}

export const getMoreUsers = () => (dispatch) => {
  dispatch(requestUsers())
  return getMore().then(response => {
    const users = response.data
    dispatch(receivedMoreUsers(users))
  })
}
