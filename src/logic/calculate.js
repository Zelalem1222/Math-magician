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
