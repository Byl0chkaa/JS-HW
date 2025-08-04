let time = +prompt('Enter time:')
if(time >= 0 && time <=15){
    console.log('First quarter')
} else if(time > 15 && time <= 30){
    console.log('Second quarter')
} else if(time > 30 && time <= 45){
    console.log('Third quarter')
} else if(time > 45 && time < 60){
    console.log('Fourth quarter')
} else{
    console.log('Error')
}