const buttonFetch = document.querySelector('#fetch');
const ouput = document.querySelector('#output');

const url = 'https://mystery-api.kushanksriraj.repl.co/get';

buttonFetch.addEventListener('click', () => {
    fetch(url).then(async response =>{
        const data = await response.text();
        if(response.ok) {
            output.innerText = `${response.status} - ${data}.`;
        } else {
        throw new Error(`${response.status} - ${data}.`);
        }
    }).catch(err => {
        output.innerText = err;
    })
});