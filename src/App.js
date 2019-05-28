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
      <button id="period">.</button>
      <button id="zero">0</button>
      <button id="one">1</button>
      <button id="two">2</button>
      <button id="three">3</button>
      <button id="four">4</button>
      <button id="five">5</button>
      <button id="six">6</button>
      <button id="seven">7</button>
      <button id="eight">8</button>
      <button id="nine">9</button>
      <button id="add">+</button>
      <button id="subtract">-</button>
      <button id="multiply">x</button>
      <button id="divide">/</button>
      <button id="equals">=</button>
      <button id="clear">AC</button>
    </div>
  );
}

class CalcScreen extends React.Component {
  render() {
    return (
    <div id="screen">
      <font>1432</font>
    </div>
    );
  }
}

export default App;
