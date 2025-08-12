function foobar(array){
    document.write(`<ul>`);
    for(const item of array){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar(['okten', -5, true, 213, 'hello', 9392]);