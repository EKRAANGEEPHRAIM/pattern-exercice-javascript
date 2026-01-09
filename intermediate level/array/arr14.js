// find the second most biggest number


function secondMax(arr){
    //The global property Infinity is a numerical value representing infinity.
    let max = -Infinity , second = -Infinity;
    for(let n of arr){
        if(n > max){
            second = max;
            max = n;
        }
        else if( n > second && n !== max){
            second = n;
        }
    }

    return second;
}

//o(n)

console.log(secondMax([10, 5, 8, 20, 15]));  // 15