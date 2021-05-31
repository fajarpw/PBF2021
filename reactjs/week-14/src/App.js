import "./App.css";

import Student from "./containers/students";
import { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student />
      </div>
    );
  }
}

export default App;
