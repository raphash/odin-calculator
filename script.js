const display = document.querySelector(".value");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

// Operation array: firstOperand, operator, secondOperand.
const operation = ["","",""];

// This rounds the operand with decimal points to a precise number without unwanted results.
function operate(operand1, operator, operand2) {
  // Operators.
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  switch (operator) {
    case "+": return sum(parseFloat(operand1), parseFloat(operand2));
    case "-": return sub(parseFloat(operand1), parseFloat(operand2));
    case "÷": return div(parseFloat(operand1), parseFloat(operand2));
    case "×": return mul(parseFloat(operand1), parseFloat(operand2));
  }
}

// Logic of numeric buttons
numbers.forEach((number) => {
  if (number.classList.contains("dot")) {
    number.addEventListener("click", ()=>{
      if (!display.textContent.includes(".")) {
        display.textContent += ".";

        // Logic to check what is the current number to add the dot.
        if (!operation[2]) {
          operation[0] = display.textContent;
        } 
        else if (operation[1]) {
          operation[2] = display.textContent;
        }
      }
    });
  }
  else {
    number.addEventListener("click", ()=>{
      if (!operation[1]) {
        operation[0] += number.textContent;
  
        display.textContent = operation[0];
      } 
      else if (operation[1]) {
        operation[2] += number.textContent;
        display.textContent = operation[2];
      }
    });
  }
});

// Logic of arithmetic operators
operators.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    if (operator.textContent != "=") {
      operation[1] = operator.textContent;
    } 
    else if (operation[1]) {
      display.textContent = operate(... operation);
      
      operation[0] = display.textContent;
      operation[1] = "";
      operation[2] = "";
    }
  });
});

// Logic of clear button.
clear.addEventListener("click", ()=>{
  operation[0] = "";
  operation[1] = "";
  operation[2] = "";

  display.textContent = 0;
});