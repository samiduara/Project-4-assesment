import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';


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
        
        </main>
      </div>
    );
  }
}

export default App;
