import Big from 'big.js';

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
    case '%':
      result = numOne.times('0.01');
      break;
    default:
  }
  return result.toString();
};

export default { operate };
