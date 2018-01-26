import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { Header, List } from 'semantic-ui-react'
import Layout from '../components/layout'

import { getData } from '../data/data'

const getSchedule = () => {
  return getData().map(d => {
    const { date, time, location } =  d
    return {
      date, time, location
    }
  })
}

const ConcertLink = ({ id, date, time, location }) => {
  return (
    <Link href={`/concert?id=${id}`}>
      <List.Item>
        <List.Header content={date} />
        <List.Description content={time + '@' + location} />
      </List.Item>
    </Link>
  )
}
ConcertLink.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

const Schedule = () => (
  <Layout>
    <Header as='h1' content='Schedule'/>
    <List selection>
      {getSchedule().map((concert, idx)=> (
        <ConcertLink 
          key={concert.date} 
          id={idx} 
          {...concert}
        />
      ))}
    </List>
  </Layout>
)

export default Schedule