// FunctionParenthesisAndParameters.tsx
import React from 'react';

// Arrow functions with implied returns
const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;

// React component
const FunctionParenthesisAndParameters: React.FC = () => {
  // Using the arrow functions to calculate values
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <div>
      <h3>Parenthesis and parameters</h3>
      twoSquared = {twoSquared}
      <br />
      square(2) = {square(2)}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      plusOne(3) = {plusOne(3)}
    </div>
  );
}

export default FunctionParenthesisAndParameters;
