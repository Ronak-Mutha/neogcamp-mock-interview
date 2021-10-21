//Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)


const text = document.querySelector('#text-input');
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");


checkBtn.addEventListener('click', () => {
    const textValue = text.value;

    console.log(textValue);

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let alphabets = /^[a-zA-Z\s]+$/;

    let vowelsCounter = 0;
    let consonantsCounter = 0;

    if(textValue === '') {
        output.innerText = 'Nothing here';
        return;
    }

    if ( textValue.match(alphabets) ) {
        const textCharacterArr = textValue.split('');
        const textCharacterArrLength = textCharacterArr.length;
        console.log(textCharacterArr);
    
        textCharacterArr.forEach(textVal => {
                if (textVal === ' ') {
                    return;
                }

                if (vowels.includes(textVal.toLowerCase())) {
                    vowelsCounter++;
                } else {
                    consonantsCounter++;
                }
            }

        );
        output.innerText = `Consonants: ${consonantsCounter} Vowels ${vowelsCounter}`;
    } else {
        output.innerText = 'Enter only alphabets.';
    }
});