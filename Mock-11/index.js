//Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.


const input = document.querySelector('#input-text');
const h1 = document.querySelector('#btn-h1');
const h2 = document.querySelector('#btn-h2');
const h3 = document.querySelector('#btn-h3');
const output = document.querySelector('#output');


function changeElement(element) {

    const inputValue = input.value;
    console.log(`<${element}>${inputValue}</${element}>`);
    output.innerHTML = `<${element}>${inputValue}</${element}>`;


    element === 'h1' ?
        output.style.color = 'red' :
        element === 'h2' ?
        output.style.color = 'green' :
        element === 'h3' ?
        output.style.color = 'blue' : output.style.color = 'black';
}

h1.addEventListener('click', () => {
    changeElement('h1');
});

h2.addEventListener('click', () => {
    changeElement('h2');
});

h3.addEventListener('click', () => {
    changeElement('h3');
});