import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const abc = useState(0);
  console.log(abc);
  return(
    <div>
      <h1>Count:</h1>
      <button>Increase</button>
    </div>
  )
}

export default App;
