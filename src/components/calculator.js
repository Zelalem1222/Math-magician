import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    return (

      <div className="container">
        <div className="display">
          <span>{total}</span>
        </div>
        <div>
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange" type="button">/</button>
        </div>
        <div>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="orange" type="button">x</button>
        </div>
        <div>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="orange" type="button">-</button>
        </div>
        <div>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="orange" type="button">+</button>
        </div>
        <div>
          <button className="wide-button" type="button">0</button>
          <button type="button">.</button>
          <button className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
