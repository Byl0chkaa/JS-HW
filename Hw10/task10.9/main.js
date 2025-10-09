let p = 100;
let firstSum = localStorage.getItem('number');

const lastReloadTime = localStorage.getItem('lastReloadTime');
if (firstSum !== null) {
    p = +firstSum;
}

if (lastReloadTime) {
    let gap = new Date().getTime() - JSON.parse(lastReloadTime);

    if (gap > 10000) {
        p += 10;
        localStorage.setItem('lastReloadTime', new Date().getTime().toString())
    } else {
        localStorage.setItem('lastReloadTime', new Date().getTime().toString());
    }
}
localStorage.setItem('number', p);
document.getElementById('block100').innerText = p;
