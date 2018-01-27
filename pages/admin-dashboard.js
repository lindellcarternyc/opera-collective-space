
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'

import { getAdminById } from '../data/admin'

const AdminDashboard = ( { admin } ) => (
  <Layout>
    <Header as='h2'>Welcome, {admin.firstName}!</Header>
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
