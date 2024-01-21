const greenBtn = document.getElementById("increase-btn")

const redBtn =document.getElementById("decrease-btn")

function countUp() {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

 

    output.innerText = result;
}

function countdown() {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;


    
    output.innerText = result;

}