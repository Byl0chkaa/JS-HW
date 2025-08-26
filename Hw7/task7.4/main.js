function Client(id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
function Product(title, price){
    this.title = title;
    this.price = price;
}
let clients = [
    new Client(1, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(2, 'Petya', 'Petrov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(3, 'Masha', 'Mashinska', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(4, 'Vasya', 'Petrov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(5, 'Oleg', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(6, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(7, 'Katya', 'Ivanova', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(8, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(9, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}]),
    new Client(10, 'Vlad', 'Ivanov', '<EMAIL>', '+380991234567', [{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}],[{title: 'Milk', price: 10}, {title: 'Bread', price: 10}])
]
console.log(clients);