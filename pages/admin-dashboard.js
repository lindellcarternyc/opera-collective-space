
import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Layout from '../components/layout'
import { Header, Segment } from 'semantic-ui-react'

import { getAdminById } from '../data/admin'

const AdminDashboard = ( { admin } ) => (
  <Layout>
    <Header as='h2'>Welcome, {admin.firstName}!</Header>
    <Link href='/add-concert'>
      <Segment>
        <Header as='h4' content='Add a concert' />
      </Segment>
    </Link>
  </Layout>
)
AdminDashboard.propTypes = {
  admin: PropTypes.shape({
    firstName: PropTypes.string.isRequired
  }).isRequired
}

AdminDashboard.getInitialProps = async (context) => {
  const { id } = context.query

  try {
    const admin = await getAdminById(parseInt(id, 10))
    return { admin }
  } catch (err) {
    throw err
  }
}

export default AdminDashboard
