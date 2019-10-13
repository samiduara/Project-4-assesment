import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';
import Circles from './Circles/Circles';

class App extends Component {
  state = { 
    selectedIndex: 0, 
    numCircles: 4
  }

  handleButtonSelection = (buttonIdx) => {
    this.setState({selectedIndex: buttonIdx})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 ASSESSMENT</header>
        <main>
          <CircleSelector
            numButtons = {this.state.numCircles}
            buttonIdx = {this.state.selectedIndex}
            handleButton = {this.handleButtonSelection}
          />
          <Circles 
            numCircles = {this.state.numCircles}
            circleIdx = {this.state.selectedIndex}
          />
        </main>
      </div>
    );
  }
}

export default App;
