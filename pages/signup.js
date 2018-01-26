
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Header, Form, Input } from 'semantic-ui-react'
import FormField from 'semantic-ui-react/dist/commonjs/collections/Form/FormField';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onChange = (e, { name, value }) => {
    switch(name) {
      case 'firstName':
      case 'lastName':
      case 'phoneNumber':
      case 'email':
      case 'password':
      case 'confirmPassword':
        this.setState({[name]: value})
      default: 
        return
    }
  }

  onSubmit = () => {
    const { 
      firstName, lastName, phoneNumber, email, password, confirmPassword
    } = this.state

    if (
      firstName !== '' && 
      lastName !== '' && 
      email !== '' && 
      password !== '' &&
      password === confirmPassword
    ) {
      console.dir({firstName, lastName, email, password, confirmPassword})
    } else {
      console.log('ERRORS IN FORM')
    }
  }

  render() {
    return (
      <Layout>
        <Header as='h2'>Signup!</Header>
        <Form>
          <Form.Group widths='2'>
            <FormField
              label='First name:'
              control={Input}
              onChange={this.onChange}
            />
            <FormField 
              label='Last name:' 
              control={Input}
              name='lastName'
              onChange={this.onChange} 
            />
          </Form.Group>
          <Form.Field 
            label='Phone number:' 
            control={Input} 
            type='tel'
            name='phoneNumber'
            onChange={this.onChange}
          />
          <Form.Field 
            label='Email:' 
            control={Input}
            type='email'
            name='email'
            onChange={this.onChange}
          />
          <Form.Field 
            label='Password:' 
            control={Input}
            type='password' 
            name='password'
            onChange={this.onChange}
          />
          <Form.Field 
            label='Confirm password:' 
            control={Input}
            type='password'
            name='confirmPassword'
            onChange={this.onChange}
          />
          <Form.Group inline>
            <Form.Button content='Sign up!' color='blue'/>
            <Form.Button content='Cancel' color='black'/>
          </Form.Group>
        </Form>
      </Layout>
    )
  }
}
Signup.propTypes = {

}

export default Signup
