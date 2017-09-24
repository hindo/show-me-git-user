import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Loader, Divider } from 'semantic-ui-react'

import UserList from '../components/UserList'
import { getList, getMore } from '../api/users'

class UserListPage extends Component {
  state = {
    isLoading: false,
    users: []
  }

  constructor () {
    super()
    this.fetchMore = this.fetchMore.bind(this)
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    getList()
      .then(response => {
        this.setState({
          users: response.data,
          isLoading: false
        })
      })
  }

  fetchMore () {
    this.setState({
      isLoading: true
    })
    getMore()
    .then(response => {
      this.setState({
        users: this.state.users.concat(response.data),
        isLoading: false
      })
    })
  }

  render () {
    return (
      <div>
        <Loader size='medium' active={this.state.isLoading}>Loading</Loader>
        <UserList users={this.state.users} />
        {this.state.users.length > 0 && <div>
          <Divider />
          <Button fluid
            loading={this.state.isLoading}
            onClick={this.fetchMore}
            style={{marginBottom: '2em'}}>
              Load more
          </Button>
        </div>}
      </div>
    )
  }
}

export default UserListPage
