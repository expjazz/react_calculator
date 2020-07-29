/* eslint-disable no-param-reassign */
// const operations = require('./operate');
const Big = require('big.js');

const operate = (one, two, operation) => {
  let result = new Big(0);
  const numOne = new Big(one);
  const numTwo = new Big(two);
  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case '*':
      result = numOne.times(numTwo);
      break;
    case '/':
      result = numOne.dividedBy(numTwo);
      break;
    default:
  }
  return result;
};

const calculate = (dataObject, btnName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '/', '*'];
  // const { operate } = operations;
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
  const result = operate(parseInt(dataObject.total), parseInt(dataObject.next), dataObject.operation);
  console.log(result);
  return dataObject;
};
let obj = {
  next: null,
  operation: null,
  total: null,
};
obj = calculate(obj, '5');
obj = calculate(obj, '5');

obj = calculate(obj, '.');

obj = calculate(obj, '5');
obj = calculate(obj, '5');

obj = calculate(obj, '+');

obj = calculate(obj, '1');
obj = calculate(obj, '2');

obj = calculate(obj, '.');
obj = calculate(obj, '3');
obj = calculate(obj, '3');

console.log(obj);

// export default { calculate };
