//Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const password = document.querySelector('#password');
const check = document.querySelector('#check');
const output = document.querySelector('#output');

password.addEventListener('input', () => {
    let passVal = password.value;
    output.innerText = passVal.length;
    password.style.outline = 'none';

    if(passVal.length > 10) {
        password.style.border = '2px solid green';
        check.disabled = false;
    } else {
        password.style.border = '2px solid red';
        check.disabled = true;
    }
});