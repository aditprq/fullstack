import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(15);
// let counter = 15
const addValue=()=>{
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1); only one increase due to batching
  //To solve this, we use callback:-
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  
}
const removeValue=()=>{
  setCounter(--counter);
}

  return (
    <>
      <h1>React Tutorial {counter}</h1>
      <h2>Counter Value :{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer:{counter}</p>

    </>
  );
}

export default App
