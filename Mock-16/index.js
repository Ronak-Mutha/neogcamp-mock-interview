// API - https://mock-practice.prakhar10v.repl.co/bollywood?name= 
// Eg - Clicking on button YJHD will make a call to https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD .

const yjhdBtn = document.querySelector('#yjhd');
const znmdBtn = document.querySelector('#znmd');
const buttonAll = document.querySelectorAll('button');
const output = document.querySelector('#output');

yjhdURL = 'https://mock-practice.prakhar10v.repl.co/bollywood?name=';
znmdURL = 'https://mock-practice.prakhar10v.repl.co/bollywood?name=';

function constructURL(url, inputText) {
    const encodedURI = encodeURI(inputText);
    return `${url}${encodedURI}`;
}

async function fetchURL(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.message);
        console.log(response);
        output.innerText = json.message;

    } catch (err) {
        output.innerText = err;
    }
}

// buttonAll.forEach(btn => {
//     btn.addEventListener('click', e => {
//         if (e.target.id === 'yjhd') {
//             fetchURL(constructURL(yjhdURL, e.target.id));
//         } else if (e.target.id === 'znmd') {
//             fetchURL(constructURL(znmdURL, e.target.id));
//         }
//     })
// });

yjhdBtn.addEventListener('click', e => {
    fetchURL(constructURL(yjhdURL, e.target.id))
});
znmdBtn.addEventListener('click', e => {
    fetchURL(constructURL(yjhdURL, e.target.id))
});

// document.body.addEventListener('click', e => {
//     if (e.target.id === 'yjhd') {
//         fetchURL(constructURL(yjhdURL, e.target.id));
//     } else if (e.target.id === 'znmd') {
//         fetchURL(constructURL(znmdURL, e.target.id));
//     }
// });