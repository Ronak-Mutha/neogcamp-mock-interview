//Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs.

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const output = document.querySelector("#output");

document.body.addEventListener("click", (e) => {
  const num1Val = Number(num1.value);
  const num2Val = Number(num2.value);
  if (e.target.id === "plus") {
    output.innerText = `${num1Val} + ${num2Val} = ${num1Val + num2Val}`;
  }
  if (e.target.id === "minus") {
    output.innerText = `${num1Val} - ${num2Val} = ${num1Val - num2Val}`;
  }
  if (e.target.id === "multiply") {
    output.innerText = `${num1Val} * ${num2Val} = ${num1Val * num2Val}`;
  }
  if (e.target.id === "divide") {
    output.innerText = `${num1Val} / ${num2Val} = ${num1Val / num2Val}`;
  }
});
