import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import { Sidebar, Menu } from 'semantic-ui-react'

const getRoutes = () => {
  return [
    {href: '/',         title: 'Home'},
    {href: '/schedule', title: 'Schedule'},
    {href: '/signup',   title: 'Sign Up'},
    {href: '/signin',   title: 'Sign In'},
  ]
}

const SidenavLink = ( { href, title } ) => (
  <Link href={href}>
    <Menu.Item content={title} />
  </Link>
)
SidenavLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

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
        {getRoutes().map(route => (
          <SidenavLink key={route.href} {...route} />
        ))}
      </Sidebar>
    </div>
  )
}
Sidenav.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default Sidenav