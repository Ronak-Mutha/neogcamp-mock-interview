const username = document.querySelector('#username');
const password = document.querySelector('#password');
const check = document.querySelector('#check');
const output = document.querySelector('#output');


check.addEventListener('click', () => {
    const usernameValue = username.value;
    const passwordValue = password.value;
    passwordValue.includes(usernameValue) ? output.innerText = 'Fail' : output.innerText = 'Success';

});