import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = (props) => (
  <Menu 
    fixed='top'
    color='blue'
    inverted
  >
  <Menu.Item onClick={props.toggleSideMenu} >
    <Icon name='tasks' />
  </Menu.Item>
  <Link href='/'>
    <Menu.Item>
      Home
    </Menu.Item>
  </Link>
  <Link href='/signup'>
    <Menu.Item content='Signup' />
  </Link>
  </Menu>
)
Navbar.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired
}

export default Navbar