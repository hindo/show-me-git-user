import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

import UserDetails from '../components/UserDetails'
import { getUser } from '../actions/user'

class UserDetailsPage extends Component {
  componentDidMount () {
    const { dispatch, match } = this.props
    dispatch(getUser(match.params.personaId))
  }

  render () {
    const { details, isFetching } = this.props
    return (
      <div>
        <Loader size='medium' active={isFetching}>Loading</Loader>
        <UserDetails user={details} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    details,
    isFetching
  } = state.user

  return { details, isFetching }
}

export default connect(mapStateToProps)(UserDetailsPage)
