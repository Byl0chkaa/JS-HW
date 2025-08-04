let day = +prompt('Enter day: ')
if(day >=1 && day <=11){
    console.log('First decade')
}else if(day >11 && day <=21){
    console.log('Second decade')
}else if(day >21 && day <=31){
    console.log('Third decade')
}else{
    console.log('Error')
}