import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Container, Sidebar } from 'semantic-ui-react'

import Navbar from './navbar'
import Sidenav from './sidenav'

const LayoutStyle = {
  position: 'relative',
  height: '100vh'
}

const childrenStyle = {
  marginTop: '3.5rem'
}

class Layout extends Component {
  static defaultProps = {
    title: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      sideMenuVisible: false
    }
  }

  toggleSideMenu = () => {
    const sideMenuVisible = !this.state.sideMenuVisible
    this.setState({sideMenuVisible})
  }

  render() {
    const title = 'OC SPACE | ' + this.props.title
    return (
      <div style={LayoutStyle}>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        <Navbar toggleSideMenu={this.toggleSideMenu}/>
        <Sidebar.Pushable>
          <Sidenav visible={this.state.sideMenuVisible}/>
          <Sidebar.Pusher>
            <Container style={childrenStyle}>
              {this.props.children}
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout