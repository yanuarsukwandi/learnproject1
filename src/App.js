import React from "react";
import Navbar from "./components/layout/Navbar.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github-Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
