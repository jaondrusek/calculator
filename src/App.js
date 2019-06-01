import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      value: '',
      hasDecimal: false
    }
  }
  render() {
    return (
      <div className="App">
        <ExpressionScreen expression={this.state.expression}/>
        <ValueScreen value={this.state.value}/>
        <CalcButtons 
          appendNum={this.appendNum} 
          addDecimal={this.addDecimal} 
          clearValue={this.clearValue}
          addNum={this.addNum}
        />
      </div>
    );
  }
  addDecimal = (dec) => {
    if (!this.state.hasDecimal) {
        this.setState({
          value: this.state.value + dec,
          hasDecimal: true
        })
    }
  }
  appendNum = (num) => {
    this.setState({
      value: this.state.value + num
    })
  }
  addNum = (exp) => {

  }
  clearValue = () => {
    this.setState( {
      value: ''
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
      <button className="symbol-button" id="add" value="+" onClick={(e) => props.addOpr(e.target.value)}>+</button>
      <button className="symbol-button" id="subtract">-</button>
      <button className="symbol-button" id="multiply">x</button>
      <button className="symbol-button" id="divide">/</button>
      <button className="equals-button" id="equals">=</button>
      <button className="clear-button" id="clear" onClick={props.clearValue}>AC</button>
    </div>
  );
}

function ValueScreen(props) {
    return (
      <div id="val-screen">
        <font>
        {
          props.value === '' ? '0' : props.value
        }
        </font>
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
