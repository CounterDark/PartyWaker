'use strict';

//#region buttonOnClick
function neverEverButtonOnClick() {
    fetch("/match-maker/start-neverEver", { method: 'POST' })
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            window.open(`/game?type=${data.type}&matchId=${data.matchId}`, '_self');
        })
        .catch((error) => {
            console.log(`Start neverEver error: ${error}`);
        });
}

function truthOrDareButtonOnClick() {
    fetch("/match-maker/start-truthOrDare")
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            window.open(`/game?type=${data.type}&matchId=${data.matchId}`, '_self');
        })
        .catch((error) => {
            console.log(`Start truthOrDare error: ${error}`);
        });
}

function rumbleButtonOnClick() {
    fetch("/start-rumble")
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            window.open(`/game?type=${data.type}&matchId=${data.matchId}`, '_self');
        })
        .catch((error) => {
            console.log(`Start rumble error: ${error}`);
        });

}
//#endregion

//#region addEventListener
document.getElementById("neverEverButton").addEventListener("click", neverEverButtonOnClick);
document.getElementById("truthOrDareButton").addEventListener("click", truthOrDareButtonOnClick);
document.getElementById("rumbleButton").addEventListener("click", rumbleButtonOnClick);
//#endregion