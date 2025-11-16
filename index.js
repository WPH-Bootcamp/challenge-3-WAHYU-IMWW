"use strict";

// 1. USER INPUT HANDLING

const prompt = require("prompt-sync")({ sigint: true });
console.log("Node.js mode active. Using prompt-sync.\n");

function getValidNumberInput(promptMessage) {
  let userInput = prompt(promptMessage);
  let numberValue = Number(userInput);

  while (isNaN(numberValue)) {
    userInput = prompt("Invalid input! Please enter a valid number:");
    numberValue = Number(userInput);
  }

  return numberValue;
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let operator = prompt(promptMessage);

  while (!validOperators.includes(operator)) {
    operator = prompt(
      `Invalid operator! Choose one of: ${validOperators.join(" ")}`
    );
  }

  return operator;
}

// 2. BASIC ARITHMETIC FUNCTIONS

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// 3. MAIN CALCULATOR LOOP

while (true) {
  const num1 = getValidNumberInput("Enter the first number:");
  const operator = getValidOperatorInput(
    "Enter an operator (+, -, *, /, %, **):"
  );
  const num2 = getValidNumberInput("Enter the second number:");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  console.log(`\nResult: ${result}`);
  console.log(`Data Type: ${typeof result}`);

  // 4. DATA TYPE & VALUE ANALYSIS

  const safeResult =
    result ?? "Result is undefined or null, something went wrong!";

  if (typeof safeResult === "number") {
    // Positive / Negative / Zero
    if (safeResult > 0) {
      console.log("The result is Positive.");
    } else if (safeResult < 0) {
      console.log("The result is Negative.");
    } else {
      console.log("The result is Zero.");
    }

    // Integer vs Float
    console.log(
      Number.isInteger(safeResult)
        ? "The number is an Integer."
        : "The number is a Floating-point value."
    );

    // Even or Odd (only valid for integers)
    console.log(
      Number.isInteger(safeResult)
        ? safeResult % 2 === 0
          ? "Even"
          : "Odd"
        : "Not applicable for Even/Odd check."
    );

    // Example of logical AND usage
    if (safeResult > 0 && safeResult % 2 === 0) {
      console.log("The result is Positive AND Even.");
    }
  } else if (typeof safeResult === "string") {
    console.log(`Message: ${safeResult}`);
  } else {
    console.log("Unexpected result type, further debugging required.");
  }

  console.log("\n----------------------------------\n");

  // 5. EXIT MECHANISM

  const continueCalc = prompt(
    "Do you want to calculate again? (yes/no): "
  ).toLowerCase();
  if (continueCalc === "no") {
    console.log("Calculator exited. Goodbye!");
    break;
  }

  console.clear(); // optional clean screen
}
