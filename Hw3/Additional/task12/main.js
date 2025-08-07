let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
let newObj = {};
for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            newObj = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                country: city.country,
                city: city.city
            }
            usersWithCities.push(newObj);
        }
    }
}
console.log(usersWithCities);