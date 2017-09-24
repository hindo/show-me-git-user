import { REQUEST_USER, RECEIVED_USER } from '../actions/user'
import user from './user'

const stateBefore = () => ({
  isFetching: false,
  details: {
    id: 0,
    name: null
  }
})

const action_REQUEST_USER = {
  type: REQUEST_USER
}

const action_RECEIVED_USER = {
  type: RECEIVED_USER,
  user: {
    id: 1,
    name: 'test'
  }
}

it('should update fetching flag as expected', () => {
  const actual = user(stateBefore(), action_REQUEST_USER)
  const expected = {
    isFetching: true,
    details: {
      id: 0,
      name: null
    },
    receivedAt: undefined
  }
  expect(actual).toEqual(expected)
})

it('should update user state as expected', () => {
  const actual = user(stateBefore(), action_RECEIVED_USER)
  const expected = {
    isFetching: false,
    details: {
      id: 1,
      name: 'test'
    },
    receivedAt: undefined
  }
  expect(actual).toEqual(expected)
})
