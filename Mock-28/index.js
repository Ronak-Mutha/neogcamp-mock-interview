// Q: Create a text input. Allow users to enter characters in it. Show an error message, “You have reached your limit” in red color just below the input element if the user enters more than 10 characters. If you delete some characters in the input element the error should go away.

const text = document.querySelector("#text");
const output = document.querySelector("#output");

text.addEventListener("input", () => {
  const textVal = text.value;
  output.innerText = textVal;

  if (textVal.length > 10) {
    output.style.color = "red";
    output.innerText = "You have reached your limit";
  } else {
    output.innerText = "";
  }
});
