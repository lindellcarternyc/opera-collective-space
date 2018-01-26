import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { Header, List } from 'semantic-ui-react'
import Layout from '../components/layout'

import { getSchedule } from '../data/schedule'

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
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

const Schedule = ( { schedule } ) => (
  <Layout>
    <Header as='h1' content='Schedule'/>
    <List selection>
      {schedule.map((concert, idx)=> (
        <ConcertLink 
          key={concert.date} 
          id={idx} 
          {...concert}
        />
      ))}
    </List>
  </Layout>
)
Schedule.getInitialProps = async function() {
  const schedule = await getSchedule()
  return {
    schedule
  }
}

export default Schedule