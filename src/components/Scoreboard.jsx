import React, { Component } from 'react';
// import components


class Scoreboard extends Component {
  
  render() {
    return (
      <div>
          <h1>{this.props.userScore}</h1>
          <h2>{this.props.compScore}</h2>
      </div>
    );
  }
}

export default Scoreboard;