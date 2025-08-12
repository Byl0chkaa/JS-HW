function objectList(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
    }
}

objectList([
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Peter', age: 30},
    {id: 3, name: 'Mary', age: 28},
    {id: 4, name: 'Alex', age: 23}
]);