//Create a paragraph  and add this sentence Lorem ipsum dolor sit amet consectetur adipisicing elit as its text node. now create a button on clicking that button it should show the number of words present  in the abovementioned sentence  as an output

const paragraph = document.querySelector('#text');
const check = document.querySelector('#check');
const output = document.querySelector('#output');

check.addEventListener('click', () => {
    const paragraphArray = paragraph.textContent.split(' ').join('');
    output.innerText = paragraphArray.length;
    console.log(paragraphArray);
    console.log(paragraphArray.length);    
});