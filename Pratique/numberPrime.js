//Check if a number is prime

function isPrime(n){
    if(n < 2) return false;


    for(let i = 2 ; i * i <= n ; i++){
        if(n % i === 0) return false;
    }

    return true;
}
// O(√n)

console.log(isPrime(100)) // false
console.log(isPrime(11)) // true;

