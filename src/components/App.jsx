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
  passButton = () => {
    if (this.state.started === false) {
      alert("Please press Start first!");
    } else if (this.state.stage === 2){
      alert("You can't do that right now!");
    } else if (this.state.playerTurn === true) {
      var compSkill = Math.floor(Math.random() * 50);
      var chance = this.state.userSkillPass - compSkill;
      var result = Math.floor(Math.random() * 100);
      if (chance > result){
        this.setState({stage: 2});
        alert("You made it past the defenders! Now you can shoot!")
      } else {
        this.setState({playerTurn: false});
        this.setState({playerTurnDisplay: "You are defending!"});
        this.setState({buttonOne: "Intercept"});
        this.setState({buttonTwo: "Tackle"});
        this.setState({buttonThree: "Save"});
        alert("You lost the ball.");
      }
    } else if (this.state.playerTurn === false) {
      var compSkill = Math.floor(Math.random() * 50) + 50;
      var chance = compSkill - this.state.userSkillInt;
      var result = Math.floor(Math.random() * 100);
      if (chance < result){
        this.setState({playerTurn: true});
        this.setState({playerTurnDisplay: "You are attacking!"});
        this.setState({buttonOne: "Pass"});
        this.setState({buttonTwo: "Dribble"});
        this.setState({buttonThree: "Shoot"});
        alert("You got the ball back!");
      } else {
        this.setState({stage: 2});
        alert("The opponent got past you. Try to make the save!")
      }
    } else {
      alert("Something went wrong. Please reload the page. Error code 1")
    }
  }
  dribbleButton = () => {
    if (this.state.started === false) {
      alert("Please press Start first!");
    } else if (this.state.stage === 2){
      alert("You can't do that right now!");
    } else if (this.state.playerTurn === true) {
      var compSkill = Math.floor(Math.random() * 50);
      var chance = this.state.userSkillDribble - compSkill;
      var result = Math.floor(Math.random() * 100);
      if (chance > result){
        this.setState({stage: 2});
        alert("You made it past the defenders! Now you can shoot!")
      } else {
        this.setState({playerTurn: false});
        this.setState({playerTurnDisplay: "You are defending!"});
        this.setState({buttonOne: "Intercept"});
        this.setState({buttonTwo: "Tackle"});
        this.setState({buttonThree: "Save"});
        alert("You lost the ball.");
      }
    } else if (this.state.playerTurn === false) {
      var compSkill = Math.floor(Math.random() * 50) + 50;
      var chance = compSkill - this.state.userSkillTackle;
      var result = Math.floor(Math.random() * 100);
      if (chance <= result){
        this.setState({playerTurn: true});
        this.setState({playerTurnDisplay: "You are attacking!"});
        this.setState({buttonOne: "Pass"});
        this.setState({buttonTwo: "Dribble"});
        this.setState({buttonThree: "Shoot"});
        alert("You got the ball back!");
      } else {
        this.setState({stage: 2});
        alert("The opponent got past you. Try to make the save!")
      }
    } else {
      alert("Something went wrong. Please reload the page. Error code 2")
    }
  }
  shootButton = () => {
    if (this.state.started === false) {
      alert("Please press Start first!");
    } else if (this.state.stage === 1){
      alert("You can't shoot yet!");
    } else if (this.state.playerTurn === true) {
      var compSkill = Math.floor(Math.random() * 50);
      var chance = this.state.userSkillShot - compSkill;
      var result = Math.floor(Math.random() * 100);
      if (chance > result){
        this.setState({playerTurn: false});
        this.setState({playerTurnDisplay: "You are defending!"});
        this.setState({buttonOne: "Intercept"});
        this.setState({buttonTwo: "Tackle"});
        this.setState({buttonThree: "Save"});
        this.setState({stage: 1});
        this.setState({userScore: this.state.userScore + 1});
        alert("You scored!");
      } else {
        this.setState({playerTurn: false});
        this.setState({playerTurnDisplay: "You are defending!"});
        this.setState({buttonOne: "Intercept"});
        this.setState({buttonTwo: "Tackle"});
        this.setState({buttonThree: "Save"});
        this.setState({stage: 1});
        alert("Your shot was saved.");
      }
    } else if (this.state.playerTurn === false) {
      var compSkill = Math.floor(Math.random() * 50) + 50;
      var chance = compSkill - this.state.userSkillGK;
      var result = Math.floor(Math.random() * 100);
      if (chance <= result) {
        this.setState({playerTurn: true});
        this.setState({playerTurnDisplay: "You are attacking!"});
        this.setState({buttonOne: "Pass"});
        this.setState({buttonTwo: "Dribble"});
        this.setState({buttonThree: "Shoot"});
        this.setState({stage: 1});
        alert("You made the save!");
      } else {
        this.setState({playerTurn: true});
        this.setState({playerTurnDisplay: "You are attacking!"});
        this.setState({buttonOne: "Pass"});
        this.setState({buttonTwo: "Dribble"});
        this.setState({buttonThree: "Shoot"});
        this.setState({stage: 1});
        this.setState({compScore: this.state.compScore + 1});
        alert("Your opponent scored.");
      }
    } else {
      alert("Something went wrong. Please reload the page. Error code 3")
    }
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
          buttonOneFunction={this.passButton}
          buttonTwoFunction={this.dribbleButton}
          buttonThreeFunction={this.shootButton}
        />
      </div>
    );
  }
}

export default App;