import React from 'react'

import Link from 'next/link'
import { Header, Button } from 'semantic-ui-react'
import Layout from '../components/layout'

const Index = () => (
  <div>
    <Layout>
      <Header 
        as='h1' 
        content='Opera Collective Space'
        style={{
          fontSize: '4em', 
          fontWeight: 'normal', 
          marginTop: '3em',
          marginBottom: '1.5em',
          textAlign: 'center'
        }}
      />
      <Link href='/schedule'>
        <Button content='View Schedule' color='blue' />
      </Link>
    </Layout>
  </div>
)

export default Index