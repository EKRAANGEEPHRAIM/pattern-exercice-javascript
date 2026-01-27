//factorial

function factorialRec(n){
    if( n <= 1) return 1 ;

    return n * factorialRec(n -1);
}
//O(n)
console.log(factorialRec(8))//40320
console.log(factorialRec(5))//120