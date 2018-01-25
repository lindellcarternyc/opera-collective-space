import Link from 'next/link'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = (props) => (
  <Menu 
    fixed='top'
    color='blue'
    inverted
  >
  <Menu.Item onClick={props.toggleSideMenu} >
    <Icon name='tasks' />
  </Menu.Item>
  <Link href='/'>
    <Menu.Item>
      Home
    </Menu.Item>
  </Link>
  </Menu>
)

export default Navbar