import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Image, Segment, Icon, Divider, Button } from 'semantic-ui-react'

const UserDetails = ({user}) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Card>
            <Image src={user.avatar_url} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>{user.login}</Card.Meta>
              <Card.Description>
                From: {user.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              {user.public_repos} Public repositories
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment>
            <Icon name='users' />
            Following: {user.following} users
            <Divider />
            <Icon name='users' />
            Followers: {user.followers} users
          </Segment>
        </Grid.Column>
      </Grid>
      <Divider />
      <Link to='/'>
        <Button fluid>Back</Button>
      </Link>
    </div>
  )
}

export default UserDetails
