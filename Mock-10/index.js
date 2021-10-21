const fetchBtn = document.querySelector('#fetch');
const output = document.querySelector('#output');


const url = 'https://unitube-server.herokuapp.com/playlist';


fetchBtn.addEventListener('click', clickHandler);

function clickHandler() {
    fetch(url)
        .then(async response => {
            const json = await response.json();
            console.log(response);
            console.log(json);
            return json;
            output.innerText = err;
        })
        // .then(json => {
        //     console.log(json);
        //     throw new Error(json.message);
        // })
        // .catch(err => {
            
        // });
}