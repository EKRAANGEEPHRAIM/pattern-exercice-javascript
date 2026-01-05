// factorielle

function factorielle (n) {
    if(n < 0) return undefined;

    let res = 1 ;

    for( let i = 2 ; i <= n ; i++ ) {
        res *= i ;
    }

    return res;
}

console.log(factorielle(5))