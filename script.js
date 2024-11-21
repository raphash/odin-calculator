const display = document.querySelector(".value");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

// Operation array: firstOperand, operator, secondOperand.
const operation = ["","",""];

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(operand1, operator, operand2) {
  switch (operator) {
    case "+": return Math.round(sum(parseFloat(operand1), parseFloat(operand2)) * 10) / 10;
    case "-": return Math.round(sub(parseFloat(operand1), parseFloat(operand2)) * 10) / 10;
    case "÷": return Math.round(div(parseFloat(operand1), parseFloat(operand2)) * 10) / 10;
    case "×": return Math.round(mul(parseFloat(operand1), parseFloat(operand2)) * 10) / 10;
  }
}

// Logic of numeric buttons
numbers.forEach((number) => {
  number.addEventListener("click", ()=>{
    
    if (!operation[1]) {
      operation[0] += number.textContent;
      display.textContent = operation[0];
    } 

    else if (operation[1]) {
      operation[2] += number.textContent;
      display.textContent = operation[2];
    }

    console.clear();
    console.log(operation)
  });
});

// Logic of arithmetic operators
operators.forEach((operator) => {
  operator.addEventListener("click", ()=>{
    if (operator.textContent != "=") {
      operation[1] = operator.textContent;
    } else if (operation[1] && operation[2]) {
      display.textContent = operate(... operation);
      
      operation[0] = display.textContent;
      operation[1] = "";
      operation[2] = "";
    }

    console.clear();
    console.log(operation)
  });
});

// Logic of clear button.
clear.addEventListener("click", ()=>{
  operation[0] = "";
  operation[1] = "";
  operation[2] = "";

  console.clear();
  display.textContent = 0;
});