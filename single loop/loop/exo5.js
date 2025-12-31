// Finding the   larrgest number of array

  function maxInArray(arr) {
  if(!arr.length) return undefined;

  let max = arr[0];

  
  for(let i = 1 ; i <= arr.length ; i++ ) {
    if( arr[i] > max) {
        max = arr[i] ;
    }
  }
        
     
  return max;
}


console.log(maxInArray([1,2,3,9]))//9
