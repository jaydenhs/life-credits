import React from "react";
import Loading from "./loading.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="text-white min-vh-100" id="overlay">
          <Loading />
        </div>
      </header>
    </div>
  );
}

export default App;
