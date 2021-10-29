const fetchImage = document.querySelector('#fetch');
const output = document.querySelector('#output');

const url = 'https://dog.ceo/api/breeds/image/random';

fetchImage.addEventListener('click', () => {
    fetch(url).then(response => response.json()).then(data => {
        output.innerHTML = `<img src=${data.message} alt='cute dogs'/>`;
    });
});