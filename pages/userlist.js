
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Header, List } from 'semantic-ui-react'

import { getUsers } from '../data/users'

const Userlist = ( { users } ) => (
  <Layout title='Users'>
    <Header as='h2'>Hello from Userlist!</Header>
    <List>
    {users.map(user => (
      <List.Item key={user.firstName} content={user.firstName + ' ' + user.lastName} />
    ))}
    </List>
  </Layout>
)
Userlist.getInitialProps = async function() {
  const users = getUsers()
  return { users }
}
Userlist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Userlist
