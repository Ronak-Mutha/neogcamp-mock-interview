//take the user birthdate and tell their age.if age is greater then 18 then show you can vote otherwise you can't vote.

const birthdate = document.querySelector('#birthdate');
const checkEligibility = document.querySelector('#check');
const outputContainer = document.querySelector('#output');

checkEligibility.addEventListener('click', () => {
    const birthdateValue = birthdate.value;
    console.log(birthdateValue);
    const birthdateArray = birthdateValue.split("-");
    console.log(birthdateArray);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthdateArray[0];

    (age > 18) ? outputContainer.innerText = "you can vote" : outputContainer.innerText = "you can't vote";
});


