import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    //console.log(count, Math.random());
    if (count < 20) setCount(count + 1);
    // follow up interview question
    // if more than one setCount(count + 1) is called then what will happen -> nothing will happen as it does same work so react fiber will send whole as one
    // if we use will use setCount((prevCount) => prevCount+1) then it will run bcz 'prevCount' means previous count value which is a state
    
    // setCount((prevCount) => prevCount+1);
    // setCount(prevCount => prevCount+1);
    // setCount((prevCount) => prevCount+1);
    // setCount((prevCount) => prevCount+1);
  };

  return (
    <>
      <h1>We will learn to count = {count}</h1>

      <button onClick={add}>Add {count}</button>
      <br />
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Substract {count}
      </button>
    </>
  );
}

export default App;
