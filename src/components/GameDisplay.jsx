import React, { Component } from 'react';
import "./GameDisplay.css";

class GameDisplay extends Component {

	render(){
		return(
			<div>
				<div className="flex">
					<button onClick={this.props.buttonOneFunction}>{this.props.buttonOne}</button><button onClick={this.props.buttonTwoFunction}>{this.props.buttonTwo}</button>
				</div>
				<div className="flex">
					<button onClick={this.props.buttonThreeFunction}>{this.props.buttonThree}</button>
				</div>
				<div className="flex">
					<h2>Passing: {this.props.pass}</h2><h2>Dribbling: {this.props.dribble}</h2><h2>Shooting: {this.props.shot}</h2>
				</div>
				<div className="flex">
					<h2>Intercepting: {this.props.intercept}</h2><h2>Tackling: {this.props.tackle}</h2><h2>Goalkeeping: {this.props.gk}</h2>
				</div>
				<div className="flex">
					<h2>{this.props.turn}</h2>
				</div>
			</div>
		);
	}
}

export default GameDisplay;