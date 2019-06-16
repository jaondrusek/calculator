import React from 'react';
import './App.css';

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      displayValue: 0,
      hasDecimal: false,
      operationJustAdded: false,
    }
  }
  render() {
    return (
      <div className="Calculator">
        <ExpressionScreen expression={this.state.expression}/>
        <ValueScreen next={this.state.displayValue}/>
        <CalcButtons 
          handleKeyPress={this.handleKeyPress}/>
      </div>
    );
  }
  handleKeyPress = (e) => {
    let numbers = ['0', '1', '2', '3', '4', '5', '5', '6', '7', '8', '9', '.'];
    let operators = ['+', '-', '/', 'x'];
    if(numbers.includes(e.target.name)){this.updateDisplay(e.target.name)}
    if(operators.includes(e.target.name)){this.setOperator(e.target.name)}
    if((e.target.name === 'AC')){this.allClear()}
    if((e.target.name === '=')){this.executeExpression()}
  }
  updateDisplay = (val) => {
    console.log('Update display');
    if (val === '.' && !this.state.hasDecimal) {
      this.setState(function(prevState) {
        let newValue = prevState.displayValue === 0 ? 0 + val : prevState.displayValue + val;
        return {
          displayValue: newValue,
          hasDecimal: true,
          operationJustAdded: false
        }
      });
    } else if (val !== '.') {
      this.setState(function(prevState) {
        let newValue = prevState.displayValue === 0 ? val : prevState.displayValue + val;
        return {
          displayValue: newValue,
          operationJustAdded: false
        }
      });
    }
  }
  setOperator = (opr) => {
    console.log('Set operator');
    if (!this.state.operationJustAdded) {
      this.setState(function(prevState) {
        return {
          expression: prevState.expression + ' ' + prevState.displayValue + ' ' + opr,
          displayValue: 0,
          hasDecimal: false,
          operationJustAdded: true
        }
      });
    } else {
      this.setState(function(prevState) {
        return {
          expression: prevState.expression.slice(0, -1) + opr,
        }
      });
    }
  }
  executeExpression = () => {
    this.setState(function(prevState) {
      let full_expression = prevState.expression + ' ' + prevState.displayValue;
      full_expression = full_expression.replace('x', '*');
      console.log(full_expression);
      let total = math.evaluate(full_expression);
      return {
        expression: '',
        displayValue: total
      }
    });
  }
  allClear = () => {
    console.log('Cleared');
    this.setState({
      expression: '',
      displayValue: 0,
      hasDecimal: false,
      operationJustAdded: false,
    });
  }
}

function CalcButtons(props) {
  return (
    <div className="buttons">
      <button className="num-button" id="period" name="." onClick={props.handleKeyPress}>.</button>
      <button className="num-button" id="zero" name="0" onClick={props.handleKeyPress}>0</button>
      <button className="num-button" id="one" name="1" onClick={props.handleKeyPress}>1</button>
      <button className="num-button" id="two" name="2" onClick={props.handleKeyPress}>2</button>
      <button className="num-button" id="three" name="3" onClick={props.handleKeyPress}>3</button>
      <button className="num-button" id="four" name="4" onClick={props.handleKeyPress}>4</button>
      <button className="num-button" id="five" name="5" onClick={props.handleKeyPress}>5</button>
      <button className="num-button" id="six" name="6" onClick={props.handleKeyPress}>6</button>
      <button className="num-button" id="seven" name="7" onClick={props.handleKeyPress}>7</button>
      <button className="num-button" id="eight" name="8" onClick={props.handleKeyPress}>8</button>
      <button className="num-button" id="nine" name="9" onClick={props.handleKeyPress}>9</button>
      <button className="symbol-button" id="add" name="+" onClick={props.handleKeyPress}>+</button>
      <button className="symbol-button" id="subtract" name="-" onClick={props.handleKeyPress}>-</button>
      <button className="symbol-button" id="multiply" name="x" onClick={props.handleKeyPress}>x</button>
      <button className="symbol-button" id="divide" name="/" onClick={props.handleKeyPress}>/</button>
      <button className="equals-button" id="equals" name="=" onClick={props.handleKeyPress}>=</button>
      <button className="clear-button" id="clear" name="AC" onClick={props.handleKeyPress}>AC</button>
    </div>
  );
}

function ValueScreen(props) {
    return (
      <div id="val-screen">
        <font>{props.next}</font>
      </div>
    );
}

function ExpressionScreen(props) {
    return (
      <div id="exp-screen">
        <font>{props.expression}</font>
      </div>
    );
}

export default App;
