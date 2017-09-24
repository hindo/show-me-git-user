import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

import UserDetails from '../components/UserDetails'
import { getPersona } from '../api/users'

class UserDetailsPage extends Component {
  state = {
    user: {},
    isLoading: false
  }

  componentDidMount () {
    const match = this.props.match;
    this.setState({
      isLoading: true
    })
    getPersona(match.params.personaId)
      .then(response => {
        this.setState({
          user: response.data,
          isLoading: false
        })
      })
  }

  render () {
    return (
      <div>
        <Loader size='medium' active={this.state.isLoading}>Loading</Loader>
        <UserDetails user={this.state.user}/>
      </div>
    )
  }
}

export default UserDetailsPage
