function User( id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [
    new User(1, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(2, 'Petya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(3, 'Masha', 'Mashinska', '<EMAIL>', '+380991234567'),
    new User(4, 'Vasya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(5, 'Oleg', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(6, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(7, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(8, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(9, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(10, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567')
];
users.filter(user => user.id % 2 === 0).forEach(user => console.log(user));