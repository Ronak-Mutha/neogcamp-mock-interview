console.log('Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.');


const password = document.querySelector('#password');
const check = document.querySelector('#check');
const output = document.querySelector('#output');

password.addEventListener('input', () => {
    const passwordValue = password.value;
    console.log(passwordValue);
    const passwordLength = passwordValue.length;
    console.log(passwordLength);
    
    if( passwordLength > 10) {
        output.innerText = `${passwordLength}   Good enough password.`;
       // check.disabled = false;
        password.style.outline ='none';
        password.style.border = '2px solid green';
    } else {
        output.innerText = `${passwordLength}   Good enough password.`;
       // check.disabled = true;
        password.style.outline ='none';
        password.style.border = '2px solid red';
    }
});

// < 10 --- disabled sometime --- reenable

check.addEventListener('click', () => {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    if(passwordLength > 10) {
       output.innerHTML = '<h1> Great job with the passwords.</h1>'
       return;
    }

    if(passwordLength < 11) {
        check.disabled = true;

        setTimeout(() => {
            check.disabled = false;
        }, 3000)
    }
});