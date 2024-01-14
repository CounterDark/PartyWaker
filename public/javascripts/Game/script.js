'use strict';

//#region functions
function getNextQuestion() {
    let params = new URLSearchParams(document.location.search);
    let data = {
        type: params.get('type'),
        matchId: params.get('matchId')
    };
    fetch('/game/getNextQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        if (data.ended) {
            window.open('/Menu', '_self');
            return;
        }
        document.getElementById('question').innerHTML = data.question;
    }).catch(error => {
        console.log(`Error getting next question: ${error}`);
    });
}
//#endregion
document.getElementById("nextButton").addEventListener("click", getNextQuestion);
//#region events
