// to count how many times a number appears

function countOccurrencesNum(arr , x) {
    let c = 0 ;

    for( let v of arr ) {
        if(v === x) {
            c++;
        }
    }

    return c ;
}

console.log(countOccurrencesNum(["j ai mangé", 'maintes fois']))