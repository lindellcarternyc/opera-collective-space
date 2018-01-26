/* eslint no-console: 0 */

const fs = require('fs')
const path = require('path')

if (process.argv.length <= 2) {
  console.error('You must provide a name as the first agument')
  process.exit(1)
}

const args = process.argv.slice(2)

const name = args[0]
const isPage = args.length > 1 && args[1] === '--page'
const directory = isPage ?
  path.resolve('pages') :
  path.resolve('components')

const files = fs.readdirSync(directory)
if (files.indexOf(name + '.js') >= 0) {
  console.error('There is already a component with that name')
  process.exit(1)
}

console.log('Creating component named ' + name)
const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

let imports =
`
import React from 'react'
import PropTypes from 'prop-types'
`
if(isPage) {
  imports += 
`
import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'
`
}

let componentTemplate
if (isPage) {
  componentTemplate = 
`
const ${capitalizedName} = () => (
  <Layout>
    <Header as='h2'>Hello from ${capitalizedName}!</Header>
  </Layout>
)
${capitalizedName}.propTypes = {

}

export default ${capitalizedName}
`
} else {
  componentTemplate =
`
const ${capitalizedName} = () => (
  <div><p> Hello from ${capitalizedName}!</p></div>
)
${capitalizedName}.propTypes = {

}

export default ${capitalizedName}
`
}


const template = imports + componentTemplate
const newComponentPath = path.join(directory, name + '.js')
fs.writeFileSync(newComponentPath, template)