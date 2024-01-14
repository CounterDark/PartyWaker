'use strict';

function buttonFunction() {
    window.open("/menu", '_self');
}

document.getElementById("startButton").addEventListener("click", buttonFunction);