// Flatten a simple table

function flatten(arr){
    const result = [];
     
    for(let el of   arr){
        if(Array.isArray(el)){
            result.push(...el);
        }

        else result.push(el)
    }

    return result;
}


console.log(flatten([1,2,3,4, 25 , [6,7] , 5]));
/**
 * [
   1, 2, 3, 4,
  25, 6, 7, 5
]
 */