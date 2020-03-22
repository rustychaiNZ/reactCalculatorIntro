import React, {Component} from 'react';
import './ClearButton.css';

class ClearButton extends Component {
	// renders button 
	render(){
		return (
			// Creates clear button with a unique function to clear calculator
			<div className="clear-btn" onClick={() => this.props.handleClear()}>
				{this.props.children}
			</div>
		);
	}
}

export default ClearButton;
