import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./Data.js"
import Cal from "./Cal.js"



function App() {
  const D = Data("2020-08-24");
  console.log(D)
  return (
    <div className="App">
      <h3>{D[0]}</h3>
      <h3>{D[6]}</h3>
      <h3>{D[1]}</h3>
      <div > <img className="img" src={D[3]} /></div>
      <h5> <div>

        <Cal
        />

      </div></h5>
      <p>
        {D[2]}
      </p>
    </div>
  );
}

export default App;
