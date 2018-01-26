import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import Router from 'next/router'

import { Menu, Icon } from 'semantic-ui-react'

import authService from '../auth/auth'

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
  if (authService.isLoggedIn() === true) {
    return [
      {href: '/',       title: 'Home'}
    ]
  } else {
    return [
      {href: '/',       title: 'Home'},
      {href: '/signup', title: 'Signup'},
      {href: '/signin', title: 'Signin'}
    ]
  }
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
  {authService.isLoggedIn() &&
    <Menu.Item 
      content='Sign out' 
      onClick={() => {
        authService.logout()
        Router.replace('/')
      }}
    />
  }
  </Menu>
)
Navbar.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired
}

export default Navbar