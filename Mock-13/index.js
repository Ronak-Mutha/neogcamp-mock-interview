const text = document.querySelector('#input-text');
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const blue = document.querySelector('#blue');
const output = document.querySelector('#output');

blue.disabled = true;

const changeElt = (elt) => {
    const textVal = text.value;
    output.innerHTML = `<${elt}>${textVal}</${elt}>`;  
    blue.disabled = false;
}

h1.addEventListener('click', () => {
    changeElt('h1');
});

h2.addEventListener('click', () => {
    changeElt('h2');
});

blue.addEventListener('click', () => {
    output.style.color = 'blue';
});