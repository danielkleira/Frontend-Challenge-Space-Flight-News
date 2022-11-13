import React from "react";
import "./App.css";
import Providers from "./Providers";
import RoutesProject from "./Routes";

function App() {
  return (
    <div className="App">
      <Providers>
        <RoutesProject />
      </Providers>
    </div>
  );
}

export default App;
