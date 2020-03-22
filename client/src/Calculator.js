import React, {Component} from 'react';
import './modules/Calculator.css';
import Button from './componenets/Button';
import Input from './componenets/Input';
import ClearButton from './componenets/ClearButton';

// Basic calculator
class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			perviouisNumber: "",
			currentNumber: "",
			operator: ""
		}
	}

	addDecimal = val => {
		// Adds a decimal value if there isn't already a decimal present
		if(this.state.input.indexOf(".") === -1){
			this.setState({input: this.state.input + val});
		}  
	}

	addToInput = val => {
		this.setState({input: this.state.input + val});
	}

	addZeroToInput = val =>{
		// Only allows user to add 0 if another number has already been entered in field
		if(this.state.input !== ''){
			this.setState({input: this.state.input + val});
		}
	}

	// On clear button, sets the calculator output to empty
	clearInput = val => {
		this.setState({input: ""});
	}

	// Allows the user to be able to add numbers on the calculator
	add = () => {
		// Stores previous number so that the user is able to use it with operators and other numbers
		this.state.perviouisNumber = this.state.input;
		this.setState({input: ""});
		this.state.operator = "plus";
	}

	// Allows user to subtract numbers
	minus = () => {
		this.state.perviouisNumber = this.state.input;
		this.setState({input: ""});
		this.state.operator = "subtract";
	}

	// Allows user to multiply numbers
	multiply = () => {
		this.state.perviouisNumber = this.state.input;
		this.setState({input: ""});
		this.state.operator = "multiply";
	}

	// Allows user to devide a number
	devide = () => {
		this.state.perviouisNumber = this.state.input;
		this.setState({input: ""});
		this.state.operator = "devide";
	}

	// Gives answer to inputted numbers and operators
	equal = () => {
		this.state.currentNumber = this.state.input;

		if(this.state.operator == "plus"){
			this.setState({
				input: parseInt(this.state.perviouisNumber) + parseFloat(this.state.currentNumber)
			});
		} else if(this.state.operator == "subtract"){
			this.setState({
				input: parseInt(this.state.perviouisNumber) - parseFloat(this.state.currentNumber)
			});
		} else if(this.state.operator == "multiply"){
			this.setState({
				input: parseInt(this.state.perviouisNumber) * parseFloat(this.state.currentNumber)
			});
		} else if(this.state.operator == "devide"){
			this.setState({
				input: parseInt(this.state.perviouisNumber) / parseFloat(this.state.currentNumber)
			});
		}
	}

	// Renders button to application page
	render(){
		return (
			<div className="App">
				<div className="calc-wrapper">
					<div className="row">
						<Input>{this.state.input}</Input>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}>7</Button>
						<Button handleClick={this.addToInput}>8</Button>
						<Button handleClick={this.addToInput}>9</Button>
						<Button handleClick={this.devide}>/</Button>
					</div>
					<div className="row">
			 			<Button handleClick={this.addToInput}>4</Button>
			 			<Button handleClick={this.addToInput}>5</Button>
			 			<Button handleClick={this.addToInput}>6</Button>
			 			<Button>*</Button>
			 		</div>
			 		<div className="row">
			 			<Button handleClick={this.addToInput}>1</Button>
			 			<Button handleClick={this.addToInput}>2</Button>
			 			<Button handleClick={this.addToInput}>3</Button>
			 			<Button handleClick={this.add}>+</Button>
			 		</div>
			 		<div className="row">
			 			<Button handleClick={this.addDecimal}>.</Button>
			 			<Button handleClick={this.addZeroToInput}>0</Button>
			 			<Button handleClick={this.equal}>=</Button>
			 			<Button handleClick={this.minus}>-</Button>
			 		</div>
			 		<div className="row">
			 			<ClearButton handleClear={this.clearInput}>Clear</ClearButton>
			 		</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
