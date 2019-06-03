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
  return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
  return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
  return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
  return parseFloat(x) / parseFloat(y);
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      prevValue: 0,
      currValue: 0,
      realTotal: 0,
      hasDecimal: false,
      operation: null,
      operationJustAdded: false
    }
  }
  render() {
    return (
      <div className="Calculator">
        <ExpressionScreen expression={this.state.expression}/>
        <ValueScreen currValue={this.state.currValue}/>
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
      this.setState(function(prevState) {
        let newValue =  prevState.currValue === 0 || prevState.operationJustAdded ? 0 + dec : prevState.currValue + dec;
        return {
          currValue: newValue,
          operationJustAdded: false,
          hasDecimal: true
        }
      })
    }
  }
  appendNum = (num) => {
    this.setState(function(prevState) {
      let newValue =  prevState.currValue === 0 || prevState.operationJustAdded ? num : prevState.currValue + num;
      return {
        currValue: newValue,
        operationJustAdded: false
      }
    })
  }
  addOperation = (opr, exp) => {
    this.setState(function(prevState){
      if (!prevState.operationJustAdded) {
        console.log("currValue: " + prevState.currValue);
        console.log("prevValue: " + prevState.prevValue);
        return {
          expression: prevState.expression + " " + prevState.currValue.toString() + ' ' + exp,
          prevValue: prevState.currValue,
          hasDecimal: false,
          operation: opr,
          operationJustAdded: true
        }
      } else if (prevState.operation !== opr) {
          let symbol_index = prevState.expression.length - 1;
          let fixed_exp = prevState.expression.substr(0, symbol_index) + exp;
          console.log(typeof fixed_exp);
        return {
          expression: fixed_exp,
          prevValue: prevState.currValue,
          hasDecimal: false,
          operation: opr,
          operationJustAdded: true
        }
      }
    })
  }
  clearValue = () => {
    this.setState( {
      currValue: 0,
      prevValue: 0,
      realTotal: 0,
      expression: '',
      hasDecimal: false,
      operation: null,
      operationJustAdded: false
    })
  }
  evaluate = () => {
    this.setState(function(prevState) {
      if (prevState.operation !== null && prevState.operationJustAdded === false) {
        let calculatedValue = prevState.operation(prevState.prevValue, prevState.currValue);
        return {
          currValue: calculatedValue,
          prevValue: prevState.currValue,
          expression: '',
          hasDecimal: false
        }
      }
    })
    console.log("currValue: " + this.state.currValue);
    console.log("prevValue: " + this.state.prevValue);
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
        <font>{props.currValue}</font>
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
