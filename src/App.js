import React from 'react';
import './App.css';
import ButtonComponents from './components/ButtonComponents'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: "",
      prevResult: ""
    }
  }

  onClick = button => {
    if (button === "Next") {
      this.setState ({
        prevResult: this.state.result,
        result: "#" + Math.floor(Math.random()*16777215).toString(16)
      })
    }
    else if (button === "Previous") {
      this.setState ({
        result: this.state.prevResult
      })
    }
  };

  render() {
    document.body.style.backgroundColor = this.state.result
    return (
      <div className="generator-body">
        <h1>
          Random Hex Color Generator
        </h1>
        <ButtonComponents onClick={this.onClick}/>
        <input type="text" name="telnum" value={this.state.result} readonly="readonly" />
      </div>
    );
  }
}

export default App;
