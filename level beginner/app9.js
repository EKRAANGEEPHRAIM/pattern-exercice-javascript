// 
//send a "hello" greeting depending on the time

function greeting ( hour) {
    if(hour < 12) {
        return 'Hello '
    }
    if( hour > 12 ) {
        return 'good afternoon'
    }
}


//example 
console.log(greeting(15))