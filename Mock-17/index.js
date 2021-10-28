const fetchAPI = document.querySelector('#fetch');
const output = document.querySelector('#output');

const serverURL = 'https://mock-practice.prakhar10v.repl.co/items';

fetchAPI.addEventListener('click', () => {
    fetchData(serverURL);
    
});

function fetchData(url) {
    fetch(url).then(response => response.json()).then(data => {
        getMaxPricedItem(data);
    });
};

function getMaxPricedItem(data) {
    let maxPrice = 0;
    let itemWithMaxPrice = '';
    data.forEach(dataItem => {
        if(dataItem.price > maxPrice) {
            maxPrice = dataItem.price;itemWithMaxPrice = dataItem.item;
        } 
    })
    output.innerText = `${itemWithMaxPrice} - ${maxPrice}`;
}