// to check if a number is pair

function pair (n){
    if(n % 2 === 0) {
        return 'pair'
    }
    

    if(n % 2 !== 0 ) {
        return 'odd';
    }
}


// example
console.log(pair(3)); // odd
