import React from "react";
import "./App.css";
import Providers from "./Providers";
import  Main  from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Providers>
        <Main/>
      </Providers>
    </div>
  );
}

export default App;
