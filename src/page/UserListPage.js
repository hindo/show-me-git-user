import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Loader, Divider } from 'semantic-ui-react'

import UserList from '../components/UserList'
import { getUsers } from '../actions/users'

class UserListPage extends Component {
  constructor () {
    super()
    this.fetchMore = this.fetchMore.bind(this)
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  fetchMore () {
    console.log('fetch more')
  }

  render () {
    const { users, isFetching } = this.props
    return (
      <div>
        <Loader size='medium' active={isFetching}>Loading</Loader>
        <UserList users={users} />
        {users.length > 0 && <div>
          <Divider />
          <Button fluid
            loading={isFetching}
            onClick={this.fetchMore}
            style={{marginBottom: '2em'}}>
              Load more
          </Button>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    isFetching,
    users,
    lastUpdated
  } = state.users

  return {
    users,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(UserListPage)
