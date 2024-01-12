'use strict';

function buttonFunction(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.documentElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}