const userId = document.querySelector('#user-id');
const userPassword = document.querySelector('#user-password');
const check = document.querySelector('#check');
const outputContainer = document.querySelector('#output-container');

const users = [{
    id: "ronak",
    password: "ronak123"
}, {
    id: "raju",
    password: "raju123"
}, {
    id: "ramu",
    password: "ramu123"
}, {
    id: "tanishk",
    password: "tanishk123"
}
];


check.addEventListener('click', () => {
    const userIdValue = userId.value;
    const userPasswordValue = userPassword.value;

    console.log(userIdValue, userPasswordValue);

    for(let i= 0; i < users.length; i++) {
        if(userIdValue === users[i].id && userPasswordValue === users[i].password) {

           return outputContainer.innerText = 'You have successfully logged in.'; 
        }
            return outputContainer.innerText = 'User id or password didn\'t match.';
    }
});