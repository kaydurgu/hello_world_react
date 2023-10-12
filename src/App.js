import React from "react";
import Content from "./components/Content";
import './App.css'
function App() {
  
  const [counter, setCounter] = React.useState(0);

  const onClickPlus = () =>{
    setCounter(counter+1);
  }
  const onClickMinus = () =>{
    setCounter(counter-1);
  }
  return (
    <div class="container-1">
        <div className="center"><h1>{counter}</h1>
          <br></br>
          <button onClick={onClickMinus} class="button-42">MINUS</button>
          <button onClick={onClickPlus} class="button-37">PLUS</button>
          </div>
          <Content/>
      </div>
  );
}
export default App;
