import Link from 'next/link'
import { Sidebar, Menu } from 'semantic-ui-react'


const Sidenav = (props) => {
  return (
    <div>
      <Sidebar 
        as={Menu} 
        animation='overlay' 
        visible={props.visible}
        vertical
        color='blue'
        inverted
        style={{paddingTop: '3.5rem'}}
      >
        <Link href='/'>
          <Menu.Item content='Home' />
        </Link>
        <Link href='/schedule'>
          <Menu.Item content='Schedule' />
        </Link>
        <Link href='/add-concert'>
          <Menu.Item content='Add Concert' />
        </Link>
      </Sidebar>
    </div>
  )
}

export default Sidenav