let { ipcRenderer } = require("electron")


let form = document.querySelector("form")
let input = document.querySelector("input")
let responses = document.querySelector("#responses")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let line = input.value
    input.value = ""
    let responseText = await ipcRenderer.invoke("console", line)
    let response = document.createElement("div")
    response.textContent = responseText
    responses.appendChild(response)
    console.log(responseText)
})

onmousemove = function (e) {
    let margincursor = 20;
    let usercusor =  document.getElementById("user-cursor");
    usercusor.style.top = (e.clientY + margincursor) + "px";
    usercusor.style.left = (e.clientX + margincursor) + "px";
}








const directory = './out/';
const fs = require('fs');

fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        console.log(file);
    })
});