let sum = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(sum);
}
sum([1,10,2,4,4]);