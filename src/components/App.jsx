import React, { Component } from 'react';
import '../css/App.css';
import Scoreboard from "./Scoreboard.jsx";
import GameDisplay from "./GameDisplay.jsx";
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userScore: 0,
        compScore: 0,
        userSkillShot: 0,
        userSkillGK: 0,
        userSkillDribble: 0,
        userSkillPass: 0,
        userSkillInt: 0,
        userSkillTackle: 0,
        started: false,
        buttonOne: "Pass",
        buttonTwo: "Dribble",
        buttonThree: "Shoot"
        // compSkillShot: 0,
        // compSkillGK: 0,
        // compSkillDribble: 0,
        // compSkillPass: 0,
        // compSkillInt: 0,
        // compSkillTackle: 0
    };
  }
  start = () => {
    if (this.state.started === false) {
      this.setState({userSkillShot: Math.floor(Math.random * 50 + 50)});
      this.setState({userSkillGK: Math.floor(Math.random * 50)});
      this.setState({userSkillPass: Math.floor(Math.random * 50 + 50)});
      this.setState({userSkillDribble: Math.floor(Math.random * 50 + 50)});
      this.setState({userSkillInt: Math.floor(Math.random * 50)});
      this.setState({userSkillTackle: Math.floor(Math.random * 50)});
      this.setState({started: true});
    } else {
      alert("You have already started the game!");
    }
  }
  onUserGoal = () => {
    this.setState({userScore: this.state.userScore + 1})
  }
  onCompGoal = () => {
    this.setState({compScore: this.state.compScore + 1})
  }
  render() {
    return (
      <button id="start" onClick={() => this.start()}>Start the game!</button>
      <div className="app">
        <Scoreboard
          userScore={this.state.userScore}
          compScore={this.state.compScore}
        />
        <GameDisplay
          buttonOne={this.state.buttonOne}
          buttonTwo={this.state.buttonTwo}
          buttonThree={this.state.buttonThree}
        />
      </div>
    );
  }
}

export default App;