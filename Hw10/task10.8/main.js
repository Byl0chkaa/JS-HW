let someForm = document.forms['someForm'];
let table = document.getElementById('table');

someForm.onsubmit = function (event) {
    event.preventDefault();
    table.innerText= '';
    let lineValue = +someForm.row.value;
    let quantity = +someForm.quantity.value;
    let content = someForm.content.value;
    console.log(lineValue,quantity,content);

    for (let i = 0; i < lineValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < quantity; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}