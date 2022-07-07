/* eslint-disable */

// import operate from './operate';

// function isNumber(item) {
//   return !!item.match(/[0-9]+/);
// }

// /**
//  * Given a button name and a calculator data object, return an updated
//  * calculator data object.
//  *
//  * Calculator data object contains:
//  *   total:s      the running total
//  *   next:String       the next number to be operated on with the total
//  *   operation:String  +, -, etc.
//  */
// export default function calculate(obj, buttonName) {
//   if (buttonName === 'AC') {
//     return {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   }

//   if (isNumber(buttonName)) {
//     if (buttonName === '0' && obj.next === '0') {
//       return {};
//     }
//     // If there is an operation, update next
//     if (obj.operation) {
//       if (obj.next && obj.next !== '0') {
//         return { ...obj, next: obj.next + buttonName };
//       }
//       return { ...obj, next: buttonName };
//     }
//     // If there is no operation, update next and clear the value
//     if (obj.next && obj.next !== '0') {
//       return {
//         next: obj.next + buttonName,
//         total: null,
//       };
//     }
//     return {
//       next: buttonName,
//       total: null,
//     };
//   }

//   if (buttonName === '.') {
//     if (obj.next) {
//       if (obj.next.includes('.')) {
//         return { ...obj };
//       }
//       return { ...obj, next: `${obj.next}.` };
//     }
//     if (obj.operation) {
//       return { ...obj, next: '0.' };
//     }
//     if (obj.total) {
//       if (obj.total.includes('.')) {
//         return {};
//       }
//       return { ...obj, next: `${obj.total}.` };
//     }
//     return { ...obj, next: '0.' };
//   }

//   if (buttonName === '=') {
//     if (obj.next && obj.operation) {
//       return {
//         total: operate(obj.total, obj.next, obj.operation),
//         next: null,
//         operation: null,
//       };
//     }
//     // '=' with no operation, nothing to do
//     return {};
//   }

//   if (buttonName === '+/-') {
//     if (obj.next) {
//       return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
//     }
//     if (obj.total) {
//       return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
//     }
//     return {};
//   }

//   // Button must be an operation

//   // When the user presses an operation button without having entered
//   // a number first, do nothing.
//   // if (!obj.next && !obj.total) {
//   //   return {};
//   // }

//   // User pressed an operation after pressing '='
//   if (!obj.next && obj.total && !obj.operation) {
//     return { ...obj, operation: buttonName };
//   }

//   // User pressed an operation button and there is an existing operation
//   if (obj.operation) {
//     if (obj.total && !obj.next) {
//       return { ...obj, operation: buttonName };
//     }

//     if (!obj.total) {
//       return { total: 0, operation: buttonName };
//     }

//     return {
//       total: operate(obj.total, obj.next, obj.operation),
//       next: null,
//       operation: buttonName,
//     };
//   }

//   // no operation yet, but the user typed one

//   // The user hasn't typed a number yet, just save the operation
//   if (!obj.next) {
//     return { operation: buttonName };
//   }

//   // save the operation and shift 'next' into 'total'
//   return {
//     total: obj.next,
//     next: null,
//     operation: buttonName,
//   };
// }


import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, pressedButton) {
  if (pressedButton === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(pressedButton)) {
    if (pressedButton === '0' && obj.next === '0') {
      return {};
    }

    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + pressedButton };
      }
      return { ...obj, next: pressedButton };
    }

    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + pressedButton,
        total: null,
      };
    }
    return {
      next: pressedButton,
      total: null,
    };
  }

  if (pressedButton === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (pressedButton === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }

    return {};
  }

  if (pressedButton === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: pressedButton };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: pressedButton };
    }

    if (!obj.total) {
      return { total: 0, operation: pressedButton };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: pressedButton,
    };
  }

  if (!obj.next) {
    return { operation: pressedButton };
  }

  return {
    total: obj.next,
    next: null,
    operation: pressedButton,
  };
}
