/* eslint-disable */

import React, { useState } from 'react';
import calculate from '../logic/calculate';


function Calculator(){
  const [state, setState] = useState({
    next: null,
    total: null,
    operation: null,
  });
 

  const calculateFunction = (e) => {
    setState((state) => {
      calculate({
        total: state.total,
        next: state.next,
        operation: state.operation
      },
      e.target.value,
      console.log(e.target.value)
      )
    })
  }


  const { next,total,operation } = setState;
return (

    <div className="container">
      <div className="display">
        <span>{next}</span>
        <span>{operation}</span>
        <span>{total}</span>
      </div>
      <div>
        <button value={'AC'} type="button" onClick={calculateFunction}>AC</button>
        <button value={''} type="button" onClick={calculateFunction}>+/-</button>
        <button value="%" type="button" onClick={calculateFunction}>%</button>
        <button value="/" className="orange" onClick={calculateFunction} type="button"> &#247;</button>
      </div>
      <div>
        <button value={7} type="button" onClick={calculateFunction}>7</button>
        <button value={8} type="button" onClick={calculateFunction}>8</button>
        <button value={9} type="button" onClick={calculateFunction}>9</button>
        <button value="*" className="orange" onClick={calculateFunction} type="button">x</button>
      </div>
      <div>
        <button value={4} type="button" onClick={calculateFunction}>4</button>
        <button value={5} type="button" onClick={calculateFunction}>5</button>
        <button value={6} type="button" onClick={calculateFunction}>6</button>
        <button value="-" className="orange" onClick={calculateFunction} type="button">-</button>
      </div>
      <div>
        <button value={1} type="button" onClick={calculateFunction}>1</button>
        <button value={2} type="button" onClick={calculateFunction}>2</button>
        <button value={3} type="button" onClick={calculateFunction}>3</button>
        <button value="+" className="orange" onClick={calculateFunction} type="button">+</button>
      </div>
      <div>
        <button value={0} onClick={calculateFunction} className="wide-button" type="button">0</button>
        <button value="." type="button" onClick={calculateFunction}>.</button>
        <button onClick={calculateFunction} className="orange" type="button">=</button>
      </div>
    </div>
  );
}






// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: '',
//       next: null,
//       operation: null,

//     };
//   }





// render() {
  
// }
// }

export default Calculator;
