import React, {Component} from 'react';
import './modules/Calculator.css';
import Button from './componenets/Button';
import Input from './componenets/Input';
import ClearButton from './componenets/ClearButton';

// Basic calculator
class Calculator extends Component {
	constructor(props) {
		// Used before 'this' keyword to call functions
		super(props);

		this.calculation = {
			input: "",
			perviouisNumber: "",
			currentNumber: "",
			operator: ""
		}
	}

	addDecimal = val => {
		// Adds a decimal value if there isn't already a decimal present
		if(calculation.input.indexOf(".") === -1){
			setState({input: calculation.input + val});
		}  
	}

	addToInput = val => {
		setState({input: calculation.input + val});
	}

	addZeroToInput = val =>{
		// Only allows user to add 0 if another number has already been entered in field
		if(calculation.input !== ''){
			setState({input: calculation.input + val});
		}
	}

	// On clear button, sets the calculator output to empty
	clearInput = val => {
		setState({input: ""});
	}

	// Allows the user to be able to add numbers on the calculator
	add = () => {
		// Stores previous number so that the user is able to use it with operators and other numbers
		setState({perviouisNumber: calculation.input});
		setState({input: ""});
		setState({operator: "plus"});
	}

	// Allows user to subtract numbers
	minus = () => {
		setState({perviouisNumber: calculation.input});
		setState({input: ""});
		setState({operator: "subtract"});
	}

	// Allows user to multiply numbers
	multiply = () => {
		setState({perviouisNumber: calculation.input});
		setState({input: ""});
		setState({operator: "multiply"});
	}

	// Allows user to divide a number
	divide = () => {
		setState({perviouisNumber: calculation.input});
		setState({input: ""});
		setState({operator: "divide"});
	}

	// Gives answer to inputted numbers and operators
	equal = () => {
		setState({currentNumber: input});

		if(calculation.operator === "plus"){
			setState({
				input: parseFloat(calculation.perviouisNumber) + parseFloat(calculation.currentNumber)
			});
		} else if(calculation.operator === "subtract"){
			setState({
				input: parseFloat(calculation.perviouisNumber) - parseFloat(calculation.currentNumber)
			});
		} else if(calculation.operator == "multiply"){
			setState({
				input: parseFloat(calculation.perviouisNumber) * parseFloat(calculation.currentNumber)
			});
		} else if(calculation.operator === "divide"){
			setState({
				input: parseFloat(calculation.perviouisNumber) / parseFloat(calculation.currentNumber)
			});
		}
	}

	// Renders button to application page
	render(){
		return (
			<div className="App">
				<div className="calc-wrapper">
					<div className="row">
						<Input>{calculation.input}</Input>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}>7</Button>
						<Button handleClick={this.addToInput}>8</Button>
						<Button handleClick={this.addToInput}>9</Button>
						<Button handleClick={this.divide}>/</Button>
					</div>
					<div className="row">
			 			<Button handleClick={this.addToInput}>4</Button>
			 			<Button handleClick={this.addToInput}>5</Button>
			 			<Button handleClick={this.addToInput}>6</Button>
			 			<Button handleClick={this.multiply}>*</Button>
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
