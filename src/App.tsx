import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Media, { MediaVideo } from "./Media";

function App() {
  return (
    <div className="App">
      <p>Hello !</p>
      <h1>wtf</h1>
      <div>
        <p>div2</p>
      </div>
      <div>
        <a href="https://wp.pl">wp</a>
      </div>
      <Media />
      <div>
        <MediaVideo/>
      </div>
    </div>
  );
}

export default App;
