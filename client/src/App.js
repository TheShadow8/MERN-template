import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a simple template for MERN stack.</h1>
        <h5>Note: Included store.js setup for Redux </h5>
        <h5>Note: proxy is point to "http://localhost:5000" </h5>
      </div>
    );
  }
}

export default App;
