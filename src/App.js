import React from "react";
//components
import Header from "./components/Header";
import Home from "./components/Home";
//styles
import { GloBalStyle } from "./GlobalStyle";
function App() {
  return (
    <div className="App">
        <Header/>
      <Home/>
      <GloBalStyle />
    </div>
  );
}

export default App;
