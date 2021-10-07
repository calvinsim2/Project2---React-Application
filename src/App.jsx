import { useState, useEffect } from "react";
import React from "react";
import DisplayItems from "./child_components/items.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DisplayItems />
    </div>
  );
}

export default App;
