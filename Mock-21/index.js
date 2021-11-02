const input = document.querySelector('#input');
const output = document.querySelector('#output');

document.body.addEventListener('click', e => {
    if(e.target.id === 'h1'){
        changeElement('h1');
    }

    if(e.target.id === 'h2'){
        changeElement('h2');
    }

    if(e.target.id === 'h3'){
        changeElement('h3');
    }
})


function changeElement(el) {
    output.innerHTML = `<${el}>${input.value}</${el}>`;
}