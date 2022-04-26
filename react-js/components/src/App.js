import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <div className="list-group">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </div>
      <Card />
    </div>
  )
}

export default App;