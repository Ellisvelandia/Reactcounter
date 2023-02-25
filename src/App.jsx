import React from "react";
import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp";

const App = () => {
  const name = "Ellis"
  return (
    <div>
      <FirstApp name={name} title={"soy un super subtitulo"} />
      <CounterApp value={10}/>
      App
    </div>
  );
};

export default App;
