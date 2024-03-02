import "./App.css";
import Card from "./components/card";

function App() {
  let myobj={
    name:"vikash",
    country:"india"
  }
  let arr=[1,2,3];
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        tailwind and props
      </h1>
      <Card name="Vikash" obj={myobj} newarr={arr} btn="click me"/>
      <Card name="Ranjan" obj={myobj} newarr={arr} />
    </>
  );
}

export default App;
