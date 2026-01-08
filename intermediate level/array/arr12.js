// find the intersection of two arrays

function intersection(a,b){
    // A Set object allows you to store a set of unique values ​​of any type, 
    // whether they are primitive values ​​or objects.
    const setB = new Set(b);

    return [...new Set(a.filter(x => setB.has(x)))]
}




console.log(intersection([1,2,2,3], [2,3]));//[2,3]