// check if a number is negative

function isNegative (number ) {
    return number < 0 ; // true if it is true and false in other case

    // more optimized
    /**
     * if(number < 0 ) {
      return 'negative';
     }
      
     else{
      return 'positive;
      }
 
     */
}

// example

console.log(isNegative(7))