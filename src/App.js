import Item from './Components/Item/index'
import Card from './Components/Card'
import './App.css'

function App(){
  return(
    <>
      <Item>Meu nome é Felipe</Item>
      <Item className="ana">Meu nome é Ana</Item>
      <Item texto='tem desse jeito tbm'/>
      <Card/>
    </>
  )
}

export default App;