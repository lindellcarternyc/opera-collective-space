import React from 'react'
import PropTypes from 'prop-types'

import { List, Header } from 'semantic-ui-react'

const SingerList = ({ singers }) => (
  <div>
    <Header as='h4' content='Singers' />
    <List bulleted>
      {singers && singers.map(singer => (
        <List.Item key={singer} content={singer}/>
      ))}
    </List>
  </div>
)
SingerList.propTypes = {
  singers: PropTypes.arrayOf(PropTypes.string)
}

export default SingerList