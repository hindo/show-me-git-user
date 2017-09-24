import parseLinkHeader from 'parse-link-header'

import { getList } from '../api/users'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVED_USERS = 'RECEIVED_USERS'
export const LOAD_MORE = 'LOAD_MORE'

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receivedUsers = (users, link) => ({
  type: RECEIVED_USERS,
  users,
  link,
  receivedAt: Date.now()
})

export const getUsers = () => (dispatch) => {
  dispatch(requestUsers())
  return getList().then(response => {
    const users = response.data
    const link = parseLinkHeader(response.headers.link)
    dispatch(receivedUsers(users, link))
  })
}

export const loadMore = () => {
  return {
    type: LOAD_MORE
  }
}
