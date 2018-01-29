import React from 'react'
import PropTypes from 'prop-types'

import { Message } from 'semantic-ui-react'

const ErrorMessage = ( { header, content } ) => {
  return (
    <Message 
      warning
      header={header}
      content={content}
    />
  )
}
ErrorMessage.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string
}

export default ErrorMessage