import { REQUEST_USERS, RECEIVED_USERS } from '../actions/users'
import users from './users'

const stateBefore = () => ({
  isFetching: false,
  users: []
})

const now = Date.now()

const action_REQUEST_USERS = {
  type: REQUEST_USERS
}

const action_RECEIVED_USERS = {
  type: RECEIVED_USERS,
  users: [{
    id: 1,
    name: 'Test - one'
  }, {
    id: 2,
    name: 'Test - two'
  }],
  receivedAt: now
}

it('should update fetching flag as expected', () => {
  const actual = users(stateBefore(), action_REQUEST_USERS)
  const expected = {
    isFetching: true,
    users: []
  }
  expect(actual).toEqual(expected)
})

it('should update user state as expected', () => {
  const actual = users(stateBefore(), action_RECEIVED_USERS)
  const expected = {
    isFetching: false,
    users: [{
      id: 1,
      name: 'Test - one'
    }, {
      id: 2,
      name: 'Test - two'
    }],
    lastUpdate: now
  }
  expect(actual).toEqual(expected)
})
