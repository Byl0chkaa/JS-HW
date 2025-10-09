function addToLocalStorage(arrayName,objToAdd){
    let item = localStorage.getItem(arrayName);

    if(!item){
        throw new Error('There is no that array');
    }

    const array = JSON.parse(item);
    if(typeof array === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName,JSON.stringify(array));
}
addToLocalStorage('sessionsList', {})