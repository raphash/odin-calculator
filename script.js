const display = document.querySelector(".value");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

const operation = ["","",""];

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(operand1, operator, operand2) {
  switch (operator) {
    case "+": return sum(+operand1, +operand2);
    case "-": return sub(+operand1, +operand2);
    case "÷": return div(+operand1, +operand2);
    case "×": return mul(+operand1, +operand2);
  }
}

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

clear.addEventListener("click", ()=>{
  operation[0] = "";
  operation[1] = "";
  operation[2] = "";

  display.textContent = "0";
});