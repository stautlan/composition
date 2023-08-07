import './App.css'
import './css/bootstrap.min.css';
import BaseCard from './components/BaseCard';
import cards from './data/data'


function App() {


  return (
    <>
      <BaseCard card={cards[0]}>
        <img src="..." className="card-img-top" alt="Image cap" />
      </BaseCard>
      <hr />
      <BaseCard card={cards[1]} />
    </>
  )
}

export default App