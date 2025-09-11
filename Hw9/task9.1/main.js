let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

let cloneDiv = div.cloneNode(true);
document.body.append(div, cloneDiv);