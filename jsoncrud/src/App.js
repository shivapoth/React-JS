
import './App.css';
// import NavBar from './components/NavBar';
import CreateProduct from './components/CreateProduct';
import Product from './components/ProductList';

function App() {
  return (
    <div className="App">
      <CreateProduct/>
      <Product />
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
