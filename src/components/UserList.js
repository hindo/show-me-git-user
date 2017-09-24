import React from 'react'
import { Card } from 'semantic-ui-react'

import UserCard from './UserCard'

const UserList = (props) => {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        { props.users.map((user) => <UserCard key={user.id} user={user} />) }
      </Card.Group>
    </div>
  )
}

export default UserList
