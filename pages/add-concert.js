import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Router from 'next/router'

import {
  Header, 
  Form,
  Dropdown,
  Radio,
  Input,
  Button
} from 'semantic-ui-react'

import Layout from '../components/layout'

import { addConcert } from '../data/data'

const DateInput = ( { handleChange } ) => (
  <Form.Field required>
    <label>Date:</label>
    <Input type='date'
      min='2018-01-25'
      fluid
      onChange={
        (e, { value }) => { handleChange('date', value) }
      }
    />
  </Form.Field>
)
DateInput.propTypes = {
  handleChange: PropTypes.func.isRequired
}

const LocationDropdown = ( { handleChange } ) => {
  const locations = [
    'Herald Square', 'Times Square', 'Union Square',
    'Port Authority'
  ].map(text => {
    return {
      text,
      key: text,
      value: text
    }
  })

  const onChange = (e, { value }) => {
    handleChange('location', value)
  }

  return (
    <Form.Field required>
      <label>Location:</label>
      <Dropdown 
        search 
        fluid 
        selection
        options={locations} 
        onChange={onChange}
      />
    </Form.Field>
  )
}
LocationDropdown.propTypes = {
  handleChange: PropTypes.func.isRequired
}

const TimeOptions = ( { handleChange, value } ) => {
  const onChange = (e, { value }) => { handleChange('time', value) }
  return (
    <Form.Group inline>
      <Form.Field>
        <label>Time:</label>
        <Radio 
          label='6 - 9'
          value='6 - 9'
          name='timeOptions'
          onChange={onChange}
          checked={value === '6 - 9'}
        />
      </Form.Field>
      <Form.Field>
        <Radio 
          label='6 - 10'
          value='6 - 10'
          name='timeOptions'
          onChange={onChange}
          checked={value === '6 - 10'}
        />
      </Form.Field>
    </Form.Group>
  )
}
TimeOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf(['6 - 9', '6 - 10']).isRequired
}


class AddConcert extends Component {
  state = { date: '', location: '', time: '6 - 9' }

  onChange = (id, value) => {
    switch (id) {
      case 'date':
      case 'location':
      case 'time':
        this.setState({
          [id]: value
        })
        break
      default: 
        throw new Error('UNSPORTED ID')
    }
  }


  onSubmit = () => {
    const { date, location, time } = this.state
    if (date !== '' && location !== '') {
      addConcert({date, location, time})
        .then(() => { Router.replace('/schedule') })
        .catch(err => { throw err })
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: invalid form state')
    }
  }

  cancel = () => {

  }

  render() {
    return (
      <Layout onSubmit={this.onSubmit}>
        <Header as='h2' content='Add Concert' />
        <Form>
          <DateInput handleChange={this.onChange}/>
          <LocationDropdown handleChange={this.onChange}/>
          <TimeOptions handleChange={this.onChange} value={this.state.time} />
          <Form.Field>
            <Button 
              color='blue'
              content='Add Concert'
              onClick={this.onSubmit}
            />
            <Button
              color='black'
              content='Cancel'
              onClick={this.cancel}
            />
          </Form.Field>
        </Form>
      </Layout>
    )
  }
}

export default AddConcert