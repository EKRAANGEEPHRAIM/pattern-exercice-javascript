//Sum of numbers

function sumRecursive(n){
    if(n === 0) {
       return 0;
    }
     return n + sumRecursive(n-1)
}//0(n)

console.log(sumRecursive(15))//120