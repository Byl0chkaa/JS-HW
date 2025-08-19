let list = (text, amount) =>{
    document.write('<ul>')
    while(amount){
        document.write(`<li>${text}</li>`)
        amount--;
    }
    document.write('</ul>')
}
list('Hello', 6);