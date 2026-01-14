// Generate prime number


//first step
function isPrime(n){
    if(n < 2) return false;


    for(let i = 2 ; i * i <= n ; i++){
        if(n % i === 0) return false;
    }

    return true;
}

/***
 * second step
 */
function generatePrimes(number){
    const res = [];

    for(let i = 2 ; i <= number ; i++){
        if(isPrime(i)) res.push(i)
    }

    return res;
}


console.log(generatePrimes(100));
/**
 * [
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
]
 */