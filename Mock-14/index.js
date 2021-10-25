const text = document.querySelector('#text-input');
const check = document.querySelector('#check');
const output = document.querySelector('#output');
const borderBtn = document.querySelector('#border-btn');

borderBtn.disabled  = true;
check.addEventListener('click', clickHandler );

function clickHandler() {

    const textVal = text.value;
    output.innerText = `${textVal}`;
    const textArr = textVal.split(' ');
    output.innerText = `Total word count: ${textArr.length}`;
    borderBtn.disabled = false;
}


borderBtn.addEventListener('click', () => {
    if(output.style.border === "" || output.style.border === 'none') {
        output.style.border = '2px solid aqua'
        return;
    }

    output.style.border = 'none';

} );