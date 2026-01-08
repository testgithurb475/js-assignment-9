const output = document.getElementById("output");

function showDateTime() {
  output.innerHTML = new Date();
}

function greetUser() {
  let first = prompt("Enter first name:");
  let last = prompt("Enter last name:");
  output.innerHTML = `Hello <b>${first} ${last}</b>`;
}

function addNumbers() {
  let a = +prompt("Enter first number:");
  let b = +prompt("Enter second number:");
  output.innerHTML = `Sum = ${a + b}`;
}

function calculator() {
  let n1 = +prompt("Enter first number:");
  let n2 = +prompt("Enter second number:");
  let op = prompt("Enter operator (+ - * /):");

  let result;
  if (op === "+") result = n1 + n2;
  else if (op === "-") result = n1 - n2;
  else if (op === "*") result = n1 * n2;
  else if (op === "/") result = n1 / n2;
  else result = "Invalid operator";

  output.innerHTML = `Result = ${result}`;
}

function squareNumber() {
  let n = +prompt("Enter number:");
  output.innerHTML = `Square = ${n * n}`;
}

function factorialNumber() {
  let n = +prompt("Enter number:");
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  output.innerHTML = `Factorial = ${fact}`;
}

function counting() {
  let start = +prompt("Start number:");
  let end = +prompt("End number:");
  let result = "";
  for (let i = start; i <= end; i++) result += i + " ";
  output.innerHTML = result;
}

function hypotenuse() {
  let base = +prompt("Enter base:");
  let perp = +prompt("Enter perpendicular:");

  function square(x) {
    return x * x;
  }

  let hypo = Math.sqrt(square(base) + square(perp));
  output.innerHTML = `Hypotenuse = ${hypo.toFixed(2)}`;
}

function rectangleArea() {
  let width = 5;
  let height = 10;
  output.innerHTML = `Area = ${width * height}`;
}

function checkPalindrome() {
  let str = prompt("Enter string:");
  let rev = str.split("").reverse().join("");
  output.innerHTML = (str === rev) ? "Palindrome" : "Not Palindrome";
}

function capitalizeWords() {
  let str = prompt("Enter sentence:");
  let result = str
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  output.innerHTML = result;
}

function longestWord() {
  let str = prompt("Enter sentence:");
  let words = str.split(" ");
  let longest = words.reduce((a, b) => b.length > a.length ? b : a);
  output.innerHTML = `Longest word: ${longest}`;
}

function countLetter() {
  let str = prompt("Enter string:");
  let letter = prompt("Enter letter:");
  let count = 0;

  for (let ch of str) {
    if (ch === letter) count++;
  }
  output.innerHTML = `Occurrences of '${letter}' = ${count}`;
}

function circleCalculations() {
  let r = +prompt("Enter radius:");

  function calcCircumference(radius) {
    return (2 * Math.PI * radius).toFixed(2);
  }

  function calcArea(radius) {
    return (Math.PI * radius * radius).toFixed(2);
  }

  output.innerHTML = `
    Circumference = ${calcCircumference(r)}<br>
    Area = ${calcArea(r)}
  `;
}