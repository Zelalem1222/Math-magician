/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next:null,
      operation:null
      
    };
  }

//   calculate = () => {
//     let checkResult = ''
//     if(this.state.total.includes('--')){
//         checkResult = this.state.total.replace('--','+')
//     }

//     else {
//         checkResult = this.state.total
//     }

//     try {
//         this.setState({
//             // eslint-disable-next-line
//              total: (eval(checkResult) || "" ) + ""
//         })
//     } catch (e) {
//         this.setState({
//             total: "error"
//         })

//     }
// };

//   reset = ()=> {
//     this.setState({ total: ''})
//   }

  

//   whenNumberKeyPressed = (event) => {
//     let inputString = this.state.total + event.target.value;
//     this.setState({
//       total : inputString
//     })
//   }

//   whenOperationKeyPressed = (event) => {
//     let inputString = this.state.total;
//     let lastIndexChar = inputString.charAt(inputString.length - 1);
    
//     if(inputString !== '' && inputString.length>0){
//       if(lastIndexChar !== event.target.value && lastIndexChar.match(/[0-9]+/)){
//         inputString = this.state.total + event.target.value;
//         this.setState({
//           total : inputString
//         })
//       }
//     }
//   }

 
calculateFunction = (x) => {
  this.setState((s) => calculate(s, x));
};

  
// parseFloat(eval(this.state.checkResult).toFixed(5))

  render() {
    const { total , operation , next } = this.state;
    return (

      <div className="container">
        <div className="display">
        <span>{next}</span>
          <span>{operation}</span>
          <span>{total}</span>
        </div>
        <div>
          <button type="button" onClick={() => this.calculateFunction('AC')}>AC</button>
          <button type="button" onClick={() => this.calculateFunction('+/-')}>+/-</button>
          <button value={'%'} type="button" onClick={() => this.calculateFunction('%')}>%</button>
          <button value={'/'} className="orange" onClick={() => this.calculateFunction('÷')} type="button"> &#247;</button>
        </div>
        <div>
          <button value={7} type="button" onClick={() => this.calculateFunction('7')} >7</button>
          <button value={8} type="button" onClick={() => this.calculateFunction('8')}>8</button>
          <button value={9} type="button" onClick={() => this.calculateFunction('9')}>9</button>
          <button value={'*'} className="orange" onClick={() => this.calculateFunction('x')} type="button">x</button>
        </div>
        <div>
          <button value={4} type="button" onClick={() => this.calculateFunction('4')}>4</button>
          <button value={5} type="button" onClick={() => this.calculateFunction('5')}>5</button>
          <button value={6} type="button" onClick={() => this.calculateFunction('6')}>6</button>
          <button value={'-'} className="orange" onClick={() => this.calculateFunction('-')} type="button">-</button>
        </div>
        <div>
          <button value={1} type="button" onClick={() => this.calculateFunction('1')}>1</button>
          <button value={2} type="button" onClick={() => this.calculateFunction('2')}>2</button>
          <button value={3} type="button" onClick={() => this.calculateFunction('3')}>3</button>
          <button value={'+'} className="orange" onClick={() => this.calculateFunction('+')} type="button">+</button>
        </div>
        <div>
          <button value={0} onClick={() => this.calculateFunction(0)} className="wide-button" type="button">0</button>
          <button value={'.'} type="button" onClick={() => this.calculateFunction('.')}>.</button>
          <button onClick={() => this.calculateFunction('=')} className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
