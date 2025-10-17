// Calculator module that performs basic arithmetic operations
function Calculator(num1, num2) {
  function sum() {
    return num1 + num2;
  }

  function difference() {
    return num1 - num2;
  }

  function product() {
    return num1 * num2;
  }

  function dividend() {
    if (num2 === 0) return "Error: Division by zero!";
    return Math.floor(num1 / num2);
  }

 
  return { sum, difference, product, dividend };
}

// Example usage
const calc12And5 = Calculator(12, 5);
console.log("Sum:", calc12And5.sum()); 
console.log("Difference:", calc12And5.difference()); 
console.log("Product:", calc12And5.product()); 
console.log("Dividend:", calc12And5.dividend());
