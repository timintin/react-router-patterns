
import React from 'react';
import { useParams } from 'react-router-dom';

function Calculator() {
  const { operation, num1, num2 } = useParams();
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = b !== 0 ? a / b : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operation';
      break;
  }

  return (
    <div>
      <h1>Result of {operation}:</h1>
      <p>{result}</p>
    </div>
  );
}

export default Calculator;
