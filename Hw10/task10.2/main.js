let input = document.getElementById('age')
let button = document.getElementById('subm')

button.onclick = () => {
    let inp = JSON.parse(input.value)
    if(inp < 18){
        alert ('You are too young')
    }
    else{
        alert ('Welcome')
    }
}