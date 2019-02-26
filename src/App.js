import React, { Component } from 'react';
import HexColorInput from './components/HexColorInput'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#ffffff'
    }
  }
  // change bg color to left div
  changeBg = (color) => {
    this.setState({backgroundColor: color})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <main className="App-main">
          <div>
          <HexColorInput handleChange={this.changeBg}/>
          </div>
          <div id="bgColor" style={{backgroundColor: this.state.backgroundColor}}>
          </div>
        </main>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
