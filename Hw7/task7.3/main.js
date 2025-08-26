function User( id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [
    new User(10, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(8, 'Petya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(6, 'Masha', 'Mashinska', '<EMAIL>', '+380991234567'),
    new User(4, 'Vasya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(5, 'Oleg', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(2, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(7, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(3, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(9, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(1, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567')
];
users.sort( (a,b) => a.id - b.id).forEach(user => console.log(user));