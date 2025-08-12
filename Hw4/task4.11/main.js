function sum(array){
    let sum = 0;
    for(const item of array){
        sum += item;
    }
    return sum;
}
console.log(sum([1,2,2,4,4]));