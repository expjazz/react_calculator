/* eslint-disable no-param-reassign */
import operationsMethod from './operate';

const calculate = (dataObject, btnName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '/', '*'];
  const { operate } = operationsMethod;
  if (numbers.includes(btnName) && dataObject.next === null) {
    dataObject.next = btnName;
  } else if (btnName === '.' && dataObject.operation === null) {
    dataObject.next += btnName;
  } else if (numbers.includes(btnName) && dataObject.operation === null && dataObject.next) {
    dataObject.next += btnName;
  } else if (operations.includes(btnName)) {
    dataObject.operation = btnName;
  } else if (dataObject.next && dataObject.operation && numbers.includes(btnName) && !dataObject.total) {
    dataObject.total = btnName;
  } else if (btnName === '.' && dataObject.operation) {
    dataObject.total += btnName;
  } else if (numbers.includes(btnName) && dataObject.operation && dataObject.total) {
    dataObject.total += btnName;
  }

  if (btnName === '=') {
    dataObject.total = operate(dataObject.next, dataObject.total, dataObject.operation);
  } else if (btnName === 'AC') {
    dataObject.total = null;
    dataObject.next = null;
    dataObject.operation = null;
  } else if (btnName === '+/-') {
    if (dataObject.next) dataObject.next *= -1;
    if (dataObject.total) dataObject.total *= -1;
  } else if (btnName === '%') {
    dataObject.total = operate(dataObject.next, null, dataObject.operation);
  }
  return dataObject;
};

export default { calculate };
