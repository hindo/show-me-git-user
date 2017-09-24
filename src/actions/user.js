import { getPersona } from '../api/users'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVED_USER = 'RECEIVED_USER'

export const requestUser = () => ({
  type: REQUEST_USER
})

export const receivedUser = (user) => ({
  type: RECEIVED_USER,
  user,
  receivedAt: Date.now()
})

export const getUser = (username) => (dispatch) => {
  dispatch(requestUser())
  return getPersona(username).then(response => {
    const user = response.data
    dispatch(receivedUser(user))
  })
}
