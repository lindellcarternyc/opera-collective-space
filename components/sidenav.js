import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { Sidebar, Menu } from 'semantic-ui-react'


const Sidenav = ( { visible } ) => {
  return (
    <div>
      <Sidebar 
        as={Menu} 
        animation='overlay' 
        visible={visible}
        vertical
        color='blue'
        inverted
        style={{paddingTop: '3.5rem'}}
      >
        <Link href='/'>
          <Menu.Item content='Home' />
        </Link>
        <Link href='/signup'>
          <Menu.Item content='Signup' />
        </Link>
        <Link href='/userlist'>
          <Menu.Item content='Users' />
        </Link>
        <Link href='/schedule'>
          <Menu.Item content='Schedule' />
        </Link>
        <Link href='/add-concert'>
          <Menu.Item content='Add Concert' />
        </Link>
      </Sidebar>
    </div>
  )
}
Sidenav.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default Sidenav