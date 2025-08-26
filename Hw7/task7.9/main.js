Array.prototype.foreach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
Array.prototype.filterr = function (callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        const item = callback(this[i], i, this);
        if (item) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}




const numbers = [5, 2, 33, 4, 2, 6, 27, 8, 95, 100];
numbers.foreach((num, index) => {
    console.log(`Індекс ${index}: ${num}`);
});

const evenNumbers = numbers.filterr(num => num % 2 === 0);
console.log(evenNumbers);