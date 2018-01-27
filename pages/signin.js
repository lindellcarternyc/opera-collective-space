
import React, { Component }from 'react'

import Router from 'next/router'

import Layout from '../components/layout'
import { Header, Form, Input } from 'semantic-ui-react'

import authService from '../auth/auth'

class Signin extends Component {
  constructor(props) {
    super(props)

    this.authService = authService
    this.state = {
      fields: {
        email: {
          value: ''
        },
        password: {
          value: ''
        }
      }
    }
  }

  onChange = (e, { name, value } ) => {
    const { fields } = this.state
    const field = {...fields[name], value}
    this.setState({
      fields: {...fields, [name]: field}
    })
  }

  onSubmit = () => {
    const { fields } = this.state
    const { email, password } = fields

    this.authService.authenticate(email.value, password.value)
      .then((user) => {
        if (user.admin === true) {
          Router.replace({
            pathname: '/admin-dashboard',
            query: { id: user._id }
          })
        } else {
          Router.replace('/')
        }
      })
      .catch(err => {
        throw err
      })
  }

  cancel = () => {
    Router.replace('/')
  }

  render() {
    const { fields } = this.state
    const { email, password } = fields
    return (
      <Layout title='Sign In'>
        <Header as='h2' content='Signin' />
        <Form>
          <Form.Field 
            fluid
            name='email'
            label='Email:'
            value={email.value}
            onChange={this.onChange}
            control={Input}
          />
          <Form.Field 
            fluid
            label='Password:'
            name='password'
            control={Input}
            type='password'
            value={password.value}
            onChange={this.onChange}
          />
          <Form.Group inline>
            <Form.Button content='Sign In!' onClick={this.onSubmit} color='blue' />
            <Form.Button content='Cancel' onClick={this.cancel} color='black' />
          </Form.Group>
        </Form>
      </Layout>
    )
  }
}

export default Signin
