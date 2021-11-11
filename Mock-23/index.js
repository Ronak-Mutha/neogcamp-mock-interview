//api = 'https://jsonplaceholder.typicode.com/posts/1/comments'
// name - email - red name - green email.

const check = document.querySelector('#check');
const output = document.querySelector('#output');

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

check.addEventListener('click', () => {
    fetch(url).then(response => response.json()).then(data => {
        data.forEach( (item, index) => {
            console.log(item.name, item.email);

            output.innerHTML += `<p>${index+1}) <span style='color:red'>${item.name}</span> - <span style='color:green'>${item.email}</span> </p>`;
        }
        );
    })
});