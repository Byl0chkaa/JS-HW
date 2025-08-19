let leastOfArray =(array) =>{
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        if (item < min)
            min = item;
    }
    console.log(min);
}
leastOfArray([1,2,-23,4,22,6,-2313,8,-321,10]);