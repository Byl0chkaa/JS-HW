let inpKg = document.getElementById('kg');
let Ft = document.getElementById('ft');

inpKg.oninput = function (){
    ft.innerText = +this.value * 2.2;
}
