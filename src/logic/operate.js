import Big from 'big.js';

const operate = (one, two, operation) => {
  let result = new Big(0);
  const numOne = new Big(one);
  let numTwo;
  let temp = false;
  if (two) numTwo = new Big(two);
  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case 'X':
      result = numOne.times(numTwo);
      break;
    case '÷':
      if (one === '0' || two === '0') temp = true;
      result = temp ? 'no division by 0' : numOne.div(numTwo);
      break;
    case '%':
      result = numOne.times('0.01');
      break;
    default:
  }
  return result.toString();
};

export default { operate };
