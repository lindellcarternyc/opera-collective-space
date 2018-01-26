
import React, { Component } from 'react'

import Router from 'next/router'

import Layout from '../components/layout'
import { Header, Form, Input } from 'semantic-ui-react'

import { addUser } from '../data/users'

class Signup extends Component {
  state = {
    fields: {
      firstName: {
        value: '',
        errors: null
      },
      lastName: {
        value: '',
      },
      phoneNumber: {
        value: ''
      },
      email: {
        value: ''
      },
      password: {
        value: ''
      },
      confirmPassword: {
        value: ''
      }
    }
  }

  onChange = (e, { name, value }) => {
    let { fields } = this.state
    let field = fields[name]
    if (field === undefined || field === null) return 
    
    fields[name] = {...fields, value, errors: null}
    this.setState({fields})
  }

  onSubmit = () => {
    const { fields } = this.state
    
    const user = Object.keys(fields).reduce((user, fieldName) => {
      const { value } = fields[fieldName]
      return {...user, [fieldName]: value}
    }, {})

    if (this.isValidUser(user)) {
      addUser(user)
      Router.replace('/userlist')
    } else {
      // eslint-disable-next-line no-console
      console.log('Errors in form')
    }
  }

  isValidUser(user) {
    return user.firstName && user.firstName.length >= 1 &&
            user.lastName && user.lastName.length >= 2 &&
            user.email && this.isValidEmail(user.email) &&
            user.phoneNumber && this.isValidPhoneNumber(user.phoneNumber) &&
            this.hasValidPassword(user)
  }

  isValidEmail(email) {
    return email && email.length >= 5
  }

  isValidPhoneNumber(phoneNumber) {
    return phoneNumber && phoneNumber.length === 10
  }

  hasValidPassword(user) {
    const { password, confirmPassword } = user
    return password && password.length >= 5 &&
          confirmPassword === password
  }

  render() {
    const { fields } = this.state
    const { 
      firstName, lastName, email, phoneNumber, password, confirmPassword 
    } = fields
    return (
      <Layout>
        <Header as='h2'>Signup!</Header>
        <Form>
          <Form.Group widths='2'>
            <Form.Field
              label='First name:'
              control={Input}
              name='firstName'
              value={firstName.value}
              onChange={this.onChange}
            />
            <Form.Field 
              label='Last name:' 
              control={Input}
              name='lastName'
              value={lastName.value}
              onChange={this.onChange} 
            />
          </Form.Group>
          <Form.Field 
            label='Phone number:' 
            control={Input} 
            type='tel'
            name='phoneNumber'
            value={phoneNumber.value}
            onChange={this.onChange}
          />
          <Form.Field 
            label='Email:' 
            control={Input}
            type='email'
            name='email'
            value={email.value}
            onChange={this.onChange}
          />
          <Form.Field 
            label='Password:' 
            control={Input}
            type='password' 
            name='password'
            value={password.value}
            onChange={this.onChange}
          />
          <Form.Field 
            label='Confirm password:' 
            control={Input}
            type='password'
            name='confirmPassword'
            value={confirmPassword.value}
            onChange={this.onChange}
          />
          <Form.Group inline>
            <Form.Button content='Sign up!' color='blue' onClick={this.onSubmit}/>
            <Form.Button content='Cancel' color='black'/>
          </Form.Group>
        </Form>
      </Layout>
    )
  }
}

export default Signup
