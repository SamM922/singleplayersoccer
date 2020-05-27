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
        startedText: "Please press Start!",
        buttonOne: "Pass",
        buttonTwo: "Dribble",
        buttonThree: "Shoot",
        stage: 1,
        playerTurn: true,
        playerTurnDisplay: "You are attacking!"
    };
  }
  start = () => {
    if (this.state.started === false) {
      var shot = Math.floor(Math.random() * 50) + 50;
      var gk = Math.floor(Math.random() * 50);
      var pass = Math.floor(Math.random() * 50) + 50;
      var dribble = Math.floor(Math.random() * 50) + 50;
      var intercept = Math.floor(Math.random() * 50);
      var tackle = Math.floor(Math.random() * 50);
      this.setState({userSkillShot: shot});
      this.setState({userSkillGK: gk});
      this.setState({userSkillPass: pass});
      this.setState({userSkillDribble: dribble});
      this.setState({userSkillInt: intercept});
      this.setState({userSkillTackle: tackle});
      this.setState({started: true});
      this.setState({startedText: "The game has started! Good luck!"});
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
      <div>
        <button className="start" onClick={() => this.start()}>Start the game!</button><p className="start">{this.state.startedText}</p>
        <Scoreboard
          userScore={this.state.userScore}
          compScore={this.state.compScore}
        />
        <GameDisplay
          buttonOne={this.state.buttonOne}
          buttonTwo={this.state.buttonTwo}
          buttonThree={this.state.buttonThree}
          shot={this.state.userSkillShot}
          gk={this.state.userSkillGK}
          pass={this.state.userSkillPass}
          dribble={this.state.userSkillDribble}
          intercept={this.state.userSkillInt}
          tackle={this.state.userSkillTackle}
          turn={this.state.playerTurnDisplay}
        />
      </div>
    );
  }
}

export default App;