/* eslint no-console: 0 */

import React, { Component }from 'react'

import Router from 'next/router'

import Layout from '../components/layout'
import ErrorMessage from '../components/form-error-message'

import { Header, Form, Input } from 'semantic-ui-react'

import axios from 'axios'

class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pristine: true,
      fields: {
        email: {
          value: '',
          error: null
        },
        password: {
          value: '',
          error: null
        }
      }
    }
  }

  onChange = (e, { name, value }) => {
    switch (name) {
      case 'email':
        this.onChangeEmail(value)
        break

      case 'password':
        this.onChangePassword(value)
        break

      default:
        return
    }
  }

  isValidEmail = email => {
    const re = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.length > 5 && email.match(re)
  }

  onChangeEmail = email => {
    
    const emailField = this.state.fields.email

    if (this.isValidEmail(email)) {
      emailField.error = null
    } else {
      emailField.error = 'Invalid email address!'
    }
    emailField.value = email
    const fields = {...this.state.fields, email: emailField}
    this.setState({fields, pristine: false})
  }

  isValidPassword = password => {
    return password.length > 5
  }

  onChangePassword = password => {
    let passwordField = this.state.fields.password
    passwordField.value = password

    if (this.isValidPassword(password)) {
      passwordField.error = null
    } else {
      passwordField.error = 'Password is too short!'
    }

    const fields = {
      ...this.state.fields,
      password: passwordField
    }

    this.setState({fields, pristine: false})
  }

  hasErrors() {
    const { fields } = this.state
    const fieldNames = Object.keys(fields)
    const fieldsArray = fieldNames.map(n => fields[n])
    const errorsArray = fieldsArray
      .map(f => f.error)
      .filter(err => err !== null)
    const errorsCount = errorsArray.length
    return errorsCount > 0
  }

  isValid() {
    const email = this.state.fields.email.value
    const password = this.state.fields.password.value

    return this.hasErrors() === false &&
      this.isValidEmail(email) && this.isValidPassword(password)
  }

  errorMessage() {
    if (this.state.fields.email.error) {
      return {
        header: 'Invalid email',
        content: 'Please provide a valid email.'
      }
    } else if (this.state.fields.password.error) {
      return {
        header: 'Invalid password',
        content: 'That password is too short.'
      }
    }
  }

  cancel = () => {
    Router.replace('/')
  }

  onSubmit = () => {
    if (this.isValid()) {
      const parsed = this.parseForm()
      axios.post('/signin', 
        parsed
      ).then(response => {
        const { user } = response.data
        console.dir(user)
      }).catch(err => {
        throw err
      })
    } else {
      return
    }
  }

  parseForm = () => {
    const { fields } = this.state
    const { email, password } = fields
    return {
      email: email.value,
      password: password.value
    }
  }

  render() {
    const { fields } = this.state
    const { email, password } = fields
    const errorMessage = this.errorMessage()

    return (
      <Layout title='Sign In'>
        <Header as='h2' content='Signin' />
        <Form warning={this.hasErrors()} onSubmit={this.onSubmit}>
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
          <ErrorMessage 
            header={errorMessage ? errorMessage.header : null}
            content={errorMessage ? errorMessage.content : null}
          />
          <Form.Group inline>
            <Form.Button 
              content='Sign In!' 
              onClick={this.onSubmit} 
              color='blue'
              disabled={!this.isValid()}
            />
            <Form.Button content='Cancel' onClick={this.cancel} color='black' />
          </Form.Group>
        </Form>
      </Layout>
    )
  }
}

export default Signin
