import React, { Component } from 'react';
import "./Scoreboard.css";
// import components


class Scoreboard extends Component {
  
  render() {
    return (
      <div>
      	<div class="flex">
          <h1>Player {this.props.userScore}</h1><h1>CPU {this.props.compScore}</h1>
        </div>
      </div>
    );
  }
}

export default Scoreboard;