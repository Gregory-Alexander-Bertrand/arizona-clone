import logo from './logo.svg';
import './App.css';
import Drinks from './Components/Drinks'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import ProductPage from './Pages/ProductPage'

function App() {
  return (
    <div className="App">
        <Banner />
        <Nav />
        <Drinks />
        <ProductPage />
    </div>
  );
}

export default App;
