let currentNum = +localStorage.getItem('number');
currentNum ++;
localStorage.setItem('number', currentNum);

document.getElementById('num').innerText = currentNum;
