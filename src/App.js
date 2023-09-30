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
  const [value,updatedValue] = useState(22);
  const increaseValue = () => updatedValue(value + 1);
  const decreaseValue = () => updatedValue(value - 1);
  return(
    <div>
      <h1>Count: {value}</h1>
      <button onClick = {increaseValue}>Increase</button>
      <button onClick = {decreaseValue}>Decrease</button>
    </div>
  )
}

export default App;
