import { Cards } from './components/Cards'
import { Card } from './components/Card';
import black from "./img/black.jpg";
import './App.css'

function App() {
  const data = [{
    id: 1,
    img: black,
    body: {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btn: "Go somewhere",
    }
  },
  {
    id: 2,
    img: null,
    body: {
      title: "Special title treatment",
      text: "With supporting text below as a natural lead-in to additional content.",
      btn: "Go somewhere",
    }
  },
];

  return (
    <div className="container">
      <Cards>
        {data.map((item) => <Card key={item.id} item={item}></Card>)}
      </Cards>
    </div>
  )
}

export default App
