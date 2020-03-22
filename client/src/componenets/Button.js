import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
	// Changes color based on whether button is not a number
	isOperator = val=>{
		return !isNaN(val) || val === '.' || val === '=';
	};

	// renders button of calculator with conditional statement finding out whether the button is a number or an operator
	render(){
		return (
			<div className={`button ${this.isOperator
				(this.props.children) ? "" : "operator"}`}
				onClick={() => this.props.handleClick
					(this.props.children)}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Button;
