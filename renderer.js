let { ipcRenderer } = require("electron")

onmousemove = function (e) {
    let margincursor = 20;
    let usercusor =  document.getElementById("user-cursor");
    usercusor.style.top = (e.clientY + margincursor) + "px";
    usercusor.style.left = (e.clientX + margincursor) + "px";
}