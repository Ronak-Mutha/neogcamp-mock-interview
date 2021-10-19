const fetchBtn = document.querySelector("#fetch-btn")
const output = document.querySelector("#output")

var URL = "https://mystery-api.kushanksriraj.repl.co/get"


function errorFetcher() {
     fetch(URL)
    .then(
        async (response) => {
            console.log(response);
            const data =  await response.text();


            if(response.status === 200 ){
                output.innerText = data;
                
            }else if (response.status === 404 ){
                output.innerText = data;
            } else if (response.status === 401 ) {
                output.innerText = data;

            } else {
                output.innerText = `${response.status} - ${data}`;
            }
            console.log(data);
            }
    )
}


fetchBtn.addEventListener("click",errorFetcher)
