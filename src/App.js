import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./Data.js";
const axios = require('axios');




function App() {
  console.log(data("2020-08-18"));
  return (
    <div className="App">

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
