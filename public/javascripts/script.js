'use strict';

//#region functions
function buttonFunction() {
    window.open("/menu", '_self');
}

function backFunction() {
    window.history.back();
}
//#endregion

//#region event listeners
document.getElementById("backButton")?.addEventListener("click", backFunction);
document.getElementById("startButton")?.addEventListener("click", buttonFunction);
//#endregion