import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import SingerList from '../components/singerlist'

import { getConcertById } from '../data/schedule'

const Concert = (props) => {
  const { date, time, location, singers } = props
  return (
    <Layout title='Concert'>
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
  singers: PropTypes.arrayOf(PropTypes.string)
}

Concert.getInitialProps = async function (context) {
  const { id } = context.query
  try {
    const concert = await getConcertById(id)

    return {...concert}
  } catch (e) {
    throw e
  }
}

export default Concert