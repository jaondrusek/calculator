import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalcScreen />
      <CalcButtons />
    </div>
  );
}

function CalcButtons() {
  return (
    <div className="buttons">
      <button className="num-button" id="period">.</button>
      <button className="num-button" id="zero">0</button>
      <button className="num-button" id="one">1</button>
      <button className="num-button" id="two">2</button>
      <button className="num-button" id="three">3</button>
      <button className="num-button" id="four">4</button>
      <button className="num-button" id="five">5</button>
      <button className="num-button" id="six">6</button>
      <button className="num-button" id="seven">7</button>
      <button className="num-button" id="eight">8</button>
      <button className="num-button" id="nine">9</button>
      <button className="symbol-button" id="add">+</button>
      <button className="symbol-button" id="subtract">-</button>
      <button className="symbol-button" id="multiply">x</button>
      <button className="symbol-button" id="divide">/</button>
      <button className="equals-button" id="equals">=</button>
      <button className="clear-button" id="clear">AC</button>
    </div>
  );
}

class CalcScreen extends React.Component {
  render() {
    return (
    <div id="screen">
      <font>14320</font>
    </div>
    );
  }
}

export default App;
