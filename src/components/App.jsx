import React, { Component } from 'react';
import '../css/App.css';
import Scoreboard from "./Scoreboard.jsx"
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
        userSkillTackle: 0
        // compSkillShot: 0,
        // compSkillGK: 0,
        // compSkillDribble: 0,
        // compSkillPass: 0,
        // compSkillInt: 0,
        // compSkillTackle: 0
    };
  }
  start = () => {
    this.setState({userSkillShot: Math.random * 50 + 50})
    this.setState({userSkillGK: Math.random * 50})
    this.setState({userSkillPass: Math.random * 50 + 50})
    this.setState({userSkillDribble: Math.random * 50 + 50})
    this.setState({userSkillInt: Math.random * 50})
    this.setState({userSkillTackle: Math.random * 50})
  }
  onUserGoal = () => {
    this.setState({userScore: this.state.userScore + 1})
  }
  onCompGoal = () => {
    this.setState({compScore: this.state.compScore + 1})
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