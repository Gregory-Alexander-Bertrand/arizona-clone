import logo from './logo.svg';
import './App.css';
import Drinks from './Components/Drinks'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
        <Banner />
        <Nav />
        <Drinks />
    </div>
  );
}

export default App;
