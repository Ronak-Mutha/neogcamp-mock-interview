//Here is an API: https://otpgenerator.ishanjirety.repl.co/get-otp?name= . You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL : https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered) on button click . In the response you will get an OTP which should be shown on the screen.

const input = document.querySelector('#input');
const check = document.querySelector('#check');
const output = document.querySelector('#output');

const url = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name=';

check.addEventListener('click', () => {
    const inputValue = input.value;
    const finalURL = url + encodeURI(inputValue);

    fetch(finalURL).then(async response => {
        const data = await response.json();

        output.innerText = data.otp;
    })

});