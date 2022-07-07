import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    next: null,
    total: '',
    operation: null,
  });

  const handleClick = (e) => {
    const pressedButton = e.target.innerText;
    const newState = calculate(state, pressedButton);
    setState(newState);
  };

  const { next, total, operation } = state;
  return (

    <div className="container">

      <div className="display">
        <span>{next}</span>
        <span>{operation}</span>
        <span>{total}</span>
      </div>
      <div>
        <button value="AC" type="button" onClick={handleClick}>AC</button>
        <button value="+/-" type="button" onClick={handleClick}>+/-</button>
        <button value="%" type="button" onClick={handleClick}>%</button>
        <button value="/" className="orange" onClick={handleClick} type="button"> &#247;</button>
      </div>
      <div>
        <button value="7" type="button" onClick={handleClick}>7</button>
        <button value="8" type="button" onClick={handleClick}>8</button>
        <button value="9" type="button" onClick={handleClick}>9</button>
        <button value="*" className="orange" onClick={handleClick} type="button">x</button>
      </div>
      <div>
        <button value="4" type="button" onClick={handleClick}>4</button>
        <button value="5" type="button" onClick={handleClick}>5</button>
        <button value="6" type="button" onClick={handleClick}>6</button>
        <button value="-" className="orange" onClick={handleClick} type="button">-</button>
      </div>
      <div>
        <button value="1" type="button" onClick={handleClick}>1</button>
        <button value="2" type="button" onClick={handleClick}>2</button>
        <button value="3" type="button" onClick={handleClick}>3</button>
        <button value="+" className="orange" onClick={handleClick} type="button">+</button>
      </div>
      <div>
        <button value="0" onClick={handleClick} className="wide-button" type="button">0</button>
        <button value="." type="button" onClick={handleClick}>.</button>
        <button value="=" onClick={handleClick} className="orange" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
