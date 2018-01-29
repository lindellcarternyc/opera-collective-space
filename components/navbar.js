import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { Menu, Icon } from 'semantic-ui-react'

const NavbarLink = ( { href, title } ) => (
  <Link href={href}>
    <Menu.Item content={title} />
  </Link>
)
NavbarLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const getRoutes = () => {
  return [
    {href: '/',       title: 'Home'},
    {href: '/signup', title: 'Signup'},
    {href: '/signin', title: 'Signin'}
  ]
}

const Navbar = (props) => (
  <Menu 
    fixed='top'
    color='blue'
    inverted
  >
  <Menu.Item onClick={props.toggleSideMenu} >
    <Icon name='tasks' />
  </Menu.Item>
  {getRoutes().map(route => (
    <NavbarLink key={route.href} {...route}/>
  ))}
  </Menu>
)
Navbar.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired
}

export default Navbar