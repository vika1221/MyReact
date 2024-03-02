import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const add = () => {
    //console.log(count, Math.random());
    if (count < 20) setCount(count + 1);
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
