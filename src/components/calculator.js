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
      <h1>Let&apos;s do some math!</h1>
      <div className="display">
        <span>{next}</span>
        <span>{operation}</span>
        <span>{total}</span>
      </div>
      <div>
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button className="orange" onClick={handleClick} type="button"> &#247;</button>
      </div>
      <div>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button className="orange" onClick={handleClick} type="button">x</button>
      </div>
      <div>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button className="orange" onClick={handleClick} type="button">-</button>
      </div>
      <div>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button className="orange" onClick={handleClick} type="button">+</button>
      </div>
      <div>
        <button onClick={handleClick} className="wide-button" type="button">0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button onClick={handleClick} className="orange" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
