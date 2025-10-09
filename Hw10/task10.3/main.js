let form = document.forms.form1;

let info = document.getElementById('userInfo');

form1.addEventListener('submit', function (e){
   e.preventDefault();
   let userName = form1.name.value;
   let userSurname = form1.surname.value;
   let userAge = +form1.age.value;
   let user = {userName, userSurname, userAge};
   info.innerText = user.userName + ' ' + user.userSurname + ' ' + user.userAge;
});
