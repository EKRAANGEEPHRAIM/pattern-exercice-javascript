//Puissance (Divide & Conquer)

function power(x , n){
    if(n === 0 ) return 1;
    if(n % 2 === 0){
        const half = power(x , n / 2);
        return half * half;
    }

    return x * power(x , n - 1);
}

// O(log n)

console.log(power(6 , 2))//36
console.log(power(7 , 3))//343