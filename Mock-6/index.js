const text = document.querySelector('#text-input');
const addTODO = document.querySelector('#add');
const output = document.querySelector('#output');

console.log(text, addTODO);
addTODO.addEventListener('click', () => {
    const textValue = text.value;
    console.log(textValue);

    const element = document.createElement('p');
    element.innerText = textValue;
    output.append(element);
})