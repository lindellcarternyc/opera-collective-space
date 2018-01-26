import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import SingerList from '../components/singerlist'

import { getData } from '../data/data'

const Concert = (props) => {
  const { date, time, location, singers } = props
  return (
    <Layout>
      <Header as='h2'>
        {date}
        <Header.Subheader content={time + ' @' + location } />
      </Header>
      <SingerList singers={singers}/>
    </Layout>
  )
}
Concert.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  singers: PropTypes.string.isRequired
}

Concert.getInitialProps = async function (context) {
  const { id } = context.query
  const data = getData()[id]

  return {
    date: data.date,
    time: data.time,
    location: data.location,
    singers: data.singers
  }
}

export default Concert