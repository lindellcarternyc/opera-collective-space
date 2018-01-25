import { List, Header } from 'semantic-ui-react'

const getSingers = () => {
  return [
    'Lindell',
    'Alexis',
    'Jose',
    'Jonathan'
  ]
}

const SingerList = ({ singers }) => (
  <div>
    <Header as='h4' content='Singers' />
    <List bulleted>
      {singers && singers.map(singer => (
        <List.Item key={singer} content={singer}/>
      ))}
    </List>
  </div>
)

export default SingerList