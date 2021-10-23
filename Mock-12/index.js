const text = document.querySelector('#text-input');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const output = document.querySelector('#output');


text.addEventListener('input', () => {
    output.innerText = text.value;
});

// const changeFontSize = (op) => {
//     const currentFontSize = parseFloat(window.getComputedStyle(output).getPropertyValue('font-size'));
//     changeFontColor(currentFontSize);
//     (op === '+') ?
//     output.style.fontSize = `${currentFontSize + 2}px` :
//     (op === '-') ?
//     output.style.fontSize = `${currentFontSize - 2}px` :
//     console.log('something went wrong.')

//     console.log(currentFontSize);
// }

function changeFontColor(fontSize) {
    if(fontSize > 25) {
        output.style.color = 'red';
    } else {
        output.style.color = 'black';
    }
}

add.addEventListener('click', () => {
    const currentFontSize = parseFloat(window.getComputedStyle(output).getPropertyValue('font-size'));
    console.log(currentFontSize);
    changeFontColor(currentFontSize);
    output.style.fontSize = `${currentFontSize + 2}px`;

});

subtract.addEventListener('click', () => {
    const currentFontSize = parseFloat(window.getComputedStyle(output).getPropertyValue('font-size'));
    console.log(currentFontSize);
    changeFontColor(currentFontSize);
    output.style.fontSize = `${currentFontSize - 2}px`;
});