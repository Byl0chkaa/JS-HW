let sessionsList = JSON.parse(localStorage.getItem('sessionsList'));

for (const sessionsListElement of sessionsList) {
    let div = document.createElement('div');
    div.innerHTML = sessionsListElement;
    document.body.appendChild(div);
}