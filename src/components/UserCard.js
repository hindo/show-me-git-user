import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'

const UserCard = ({user}) => {
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={user.avatar_url} />
        <Card.Header>
          {user.login}
        </Card.Header>
        <Card.Meta>
          <span>Type: {user.type}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui one buttons'>
          <Link to={`/persona/${user.login}`}>
            <Button basic color='green'>Show me more</Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  )
}

export default UserCard
