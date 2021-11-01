const inputText = document.querySelector('#text-input');
// const bold = document.querySelector('#bold');
// const italics = document.querySelector('#italics');
// const underline = document.querySelector('#underline');
const output = document.querySelector('#output');


inputText.addEventListener('input', () => {
    output.innerText = inputText.value;
});

document.body.addEventListener('click', e => {
    if(e.target.id === 'bold') {
        output.innerHTML = `<strong>${inputText.value}</strong>`;
    }

    if(e.target.id === 'italics') {
        output.innerHTML = `<i>${inputText.value}</i>`;
    }

    if(e.target.id === 'underline') {
        output.innerHTML = `<u>${inputText.value}</u>`;
    }
});


