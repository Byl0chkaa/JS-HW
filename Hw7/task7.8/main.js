class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas =[
    new Cinderella('Anna', 19, 35),
    new Cinderella('Olena', 21, 36),
    new Cinderella('Kateryna', 22, 37),
    new Cinderella('Iryna', 20, 38),
    new Cinderella('Sofiia', 23, 40),
    new Cinderella('Mariia', 18, 34),
    new Cinderella('Natalia', 24, 39),
    new Cinderella('Viktoria', 25, 37),
    new Cinderella('Oksana', 20, 41),
    new Cinderella('Yulia', 21, 38)
]

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Ivan', 20, 34);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.shoe){
        console.log(cinderella.name);
    }
}

const find = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
console.log(find.name);