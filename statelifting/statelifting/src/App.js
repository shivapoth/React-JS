

import './App.css';
 import Child from './components/child';
function App() {
  function getDate(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <Child getDate={getDate} />
    </div>
  );
} export default App;