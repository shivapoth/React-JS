
import { ToastContainer } from 'react-toastify';
import './App.css';
// import Login from './components/Login';
import NavBar from './components/NavBar';
// import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      {/* <ProductList/> */}
    <NavBar/>
    <ToastContainer/>
    {/* <Login/> */}
    </div>
  );
}

export default App;
