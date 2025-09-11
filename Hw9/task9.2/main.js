let arr = [`Main`, `Products`, `About us`, `Contacts`]

let ul = document.createElement('ul');
ul.classList.add('menu');

for (const ulElement of arr) {
    let li = document.createElement('li');
    li.innerHTML = ulElement;
    ul.appendChild(li);
}

document.body.appendChild(ul);