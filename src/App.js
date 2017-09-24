import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container, Menu, Icon } from 'semantic-ui-react'

import rootStore from './store'
import UserListPage from './page/UserListPage'
import UserDetailsPage from './page/UserDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={rootStore}>
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item><Icon name='github alternate' /> Git Personas</Menu.Item>
              <Menu.Item>
                <Link to='/'>Personas list</Link>
              </Menu.Item>
            </Container>
          </Menu>
          <Container style={{marginTop: '5em'}}>
            <div>
              <Route path='/' exact component={UserListPage} />
              <Route path='/persona/:personaId' exact component={UserDetailsPage} />
            </div>
          </Container>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
