import React from 'react';
/* eslint-disable */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
  }

  pressed = ()=> {
    this.setState({total:''})
  }

  whenNumberKeyPressed = (event) => {
    let inputString = this.state.total + event.target.value;
    this.setState({
      total : inputString
    })
  }

  whenOperationKeyPressed = (event) => {
    let inputString = this.state.total;
    if(inputString !== '' && inputString.length>0){
      let lastIndex = inputString.charAt(inputString.length - 1);
      if(lastIndex !== event.target.value && lastIndex.match(/^([0-9])&/)){
        inputString = this.state.total + event.target.value;
        this.setState({
          total : inputString
        })
      }
    }
    console.log(inputString)
  }

  render() {
    const { total } = this.state;
    return (

      <div className="container">
        <div className="display">
          <span>{total}</span>
        </div>
        <div>
          <button type="button" onClick={this.pressed}>AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button  className="orange" type="button"> &#247;</button>
        </div>
        <div>
          <button value={7} type="button" onClick={this.whenNumberKeyPressed} >7</button>
          <button value={8} type="button" onClick={this.whenNumberKeyPressed}>8</button>
          <button value={9} type="button" onClick={this.whenNumberKeyPressed}>9</button>
          <button value={'*'} className="orange" onClick={this.whenOperationKeyPressed} type="button">x</button>
        </div>
        <div>
          <button value={4} type="button" onClick={this.whenNumberKeyPressed}>4</button>
          <button value={5} type="button" onClick={this.whenNumberKeyPressed}>5</button>
          <button value={6} type="button" onClick={this.whenNumberKeyPressed}>6</button>
          <button className="orange" type="button">-</button>
        </div>
        <div>
          <button value={1} type="button" onClick={this.whenNumberKeyPressed}>1</button>
          <button value={2} type="button" onClick={this.whenNumberKeyPressed}>2</button>
          <button value={3} type="button" onClick={this.whenNumberKeyPressed}>3</button>
          <button className="orange" type="button">+</button>
        </div>
        <div>
          <button value={0} onClick={this.whenNumberKeyPressed} className="wide-button" type="button">0</button>
          <button type="button">.</button>
          <button className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
