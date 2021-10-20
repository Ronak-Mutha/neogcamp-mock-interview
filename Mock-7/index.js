const fetchBtn = document.querySelector("#fetch-api");

const url = "https://mystery-api.kushanksriraj.repl.co/get";

fetchBtn.addEventListener("click", () => {
  fetch(url).then(async (response) => {
    const data = await response.text();
    response.status === 200
      ? (output.innerText = data)
      : response.status === 404
      ? (output.innerText = "Page not found")
      : response.status === 401
      ? (output.innerText = "User not logged in")
      : console.log(`${response.status} - ${response.data}`);
  });
});