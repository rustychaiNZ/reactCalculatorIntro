import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
	// Changes color based on whether button is not a number
	isOperator = val => {
		return !isNaN(val) || val === '.' || val === '=';
	};

	/* 
	renders button of calculator with conditional statement finding out whether the button is a number or an operator
		> ? is used instead of if to find whether the button clicked is an operator
		> Function called in Calculator.js that stores clicked button as a number or operator
	*/
	render(){
		return (
			<div className = {`button ${this.isOperator (this.props.children) ? "" : "operator"}`} 
			onClick = { () => this.props.handleClick(this.props.children) }>
				{this.props.children}
			</div>
		);
	}
}

export default Button;
