import React, { Component } from 'react';
import '../css/App.css';
import Scoreboard from "./Scoreboard.jsx"
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userScore: 0,
        compScore: 0
    };
  }
  render() {
    return (
      <div className="app">
        <Scoreboard
            userScore={this.state.userScore}
            compScore={this.state.compScore}
        />
        
      </div>
    );
  }
}

export default App;