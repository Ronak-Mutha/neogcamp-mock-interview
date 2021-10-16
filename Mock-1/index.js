const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const outputContainer = document.querySelector("#output-container");

console.log(add, subtract, outputContainer);

let counter = 0;

add.addEventListener('click', () => {
    counter++;
    console.log(counter);
    outputContainer.innerText = counter;
    fizzBuzz(counter);

    counter &&  fucntsdcsc;
});

subtract.addEventListener('click', () => {
    counter--;
    console.log(counter);
    outputContainer.innerText = counter;
    fizzBuzz(counter);
});

const fizzBuzz = (counter) => {
    outputContainer.style.color = 'black';

    if(counter % 3 == 0 && counter % 5 == 0) {
        outputContainer.style.color = 'yellow';
        return;
    }

    if(counter % 3 == 0) {
        outputContainer.style.color = 'red';
        return;
    }


    if(counter % 5 == 0) {
        outputContainer.style.color = 'green';
        return;
    }
};
