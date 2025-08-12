function leastOfArray(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        if (item < min)
            min = item;
    }
    return min;
}
console.log(leastOfArray([1,2,-23,4,22,6,231,8,-321,10]));