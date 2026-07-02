import React, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const decrement=()=>{
   setCounter(counter -1);
    console.log(counter);
  }
  
  const increment=()=>{
   setCounter(counter + 1);
    console.log(counter);
  }
  
  const reset=()=>{
   setCounter(0);
    console.log(counter);
  }
  
  return (
   
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
   
    );
  }
  export default App;