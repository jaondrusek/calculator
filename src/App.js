import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

function add(x, y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
  return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
  return parseInt(x) * parseInt(y);
}

function divide(x, y) {
  return parseInt(x) / parseInt(y);
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      prevValue: 0,
      value: 0,
      hasDecimal: false,
      operation: null
    }
  }
  render() {
    return (
      <div className="Calculator">
        <ExpressionScreen expression={this.state.expression}/>
        <ValueScreen value={this.state.value}/>
        <CalcButtons 
          appendNum={this.appendNum} 
          addDecimal={this.addDecimal} 
          clearValue={this.clearValue}
          addOperation={this.addOperation}
          evaluate={this.evaluate}
        />
      </div>
    );
  }
  addDecimal = (dec) => {
    if (!this.state.hasDecimal) {
        this.setState(function(prevState){
          return {
            value: prevState.value + dec,
            hasDecimal: true
          }
        })
    }
  }
  appendNum = (num) => {
    this.setState(function(prevState, props) {
      return {value: prevState.value === 0 ? num : prevState.value + num}
    })
  }
  addOperation = (opr, exp) => {
    this.setState(function(prevState){
      return {
        expression: prevState.value.toString() + ' ' + exp,
        value: 0,
        prevValue: prevState.value,
        hasDecimal: false,
        operation: opr 
      }
    })
  }
  clearValue = () => {
    this.setState( {
      value: 0,
      expression: '',
      hasDecimal: false
    })
  }
  evaluate = () => {
    this.setState(function(prevState) {
      console.log(prevState.operation);
      console.log(prevState.prevValue);
      console.log(prevState.value);
      return {
        value: prevState.operation(prevState.prevValue, prevState.value),
        expression: '',
        hasDecimal: false
      }
    })
  }
}

function CalcButtons(props) {
  return (
    <div className="buttons">
      <button className="num-button" id="period" value="." onClick={(e) => props.addDecimal(e.target.value)}>.</button>
      <button className="num-button" id="zero" value="0" onClick={(e) => props.appendNum(e.target.value)}>0</button>
      <button className="num-button" id="one" value="1" onClick={(e) => props.appendNum(e.target.value)}>1</button>
      <button className="num-button" id="two" value="2" onClick={(e) => props.appendNum(e.target.value)}>2</button>
      <button className="num-button" id="three" value="3" onClick={(e) => props.appendNum(e.target.value)}>3</button>
      <button className="num-button" id="four" value="4" onClick={(e) => props.appendNum(e.target.value)}>4</button>
      <button className="num-button" id="five" value="5" onClick={(e) => props.appendNum(e.target.value)}>5</button>
      <button className="num-button" id="six" value="6" onClick={(e) => props.appendNum(e.target.value)}>6</button>
      <button className="num-button" id="seven" value="7" onClick={(e) => props.appendNum(e.target.value)}>7</button>
      <button className="num-button" id="eight" value="8" onClick={(e) => props.appendNum(e.target.value)}>8</button>
      <button className="num-button" id="nine" value="9" onClick={(e) => props.appendNum(e.target.value)}>9</button>
      <button className="symbol-button" id="add" value="+" onClick={(e) => props.addOperation(add, e.target.value)}>+</button>
      <button className="symbol-button" id="subtract" value="-" onClick={(e) => props.addOperation(subtract, e.target.value)}>-</button>
      <button className="symbol-button" id="multiply" value="x" onClick={(e) => props.addOperation(multiply, e.target.value)}>x</button>
      <button className="symbol-button" id="divide" value="\" onClick={(e) => props.addOperation(divide, e.target.value)}>/</button>
      <button className="equals-button" id="equals" value="=" onClick={props.evaluate}>=</button>
      <button className="clear-button" id="clear" onClick={props.clearValue}>AC</button>
    </div>
  );
}

function ValueScreen(props) {
    return (
      <div id="val-screen">
        <font>{props.value}</font>
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
