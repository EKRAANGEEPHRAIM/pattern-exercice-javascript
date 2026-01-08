//find the difference between two arrays

function difference(a , b){
    const setB = new Set(b);

    return a.filter(x => !setB.has(x));
}



console.log(difference([1,2,2,3], [2,3]));//[1]
