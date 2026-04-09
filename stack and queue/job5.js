/**
 * Given a temperature array, return an array where each position contains the number of days to wait for a warmer temperature. If none, return 0.
 */

function dailyTemperatures(temperatures) {
    //The fill() method of Array instances modifies all elements of an array within a range of indices to assign them a static value. 
    // It returns the modified array.
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // Stack to store indices of temperatures
    for(let i = 0 ; i < temperatures.length ; i++){
        while(stack.length && temperatures[i] > temperatures[stack.at(-1)]){
            const j = stack.pop();
            result[j] = i - j ; // Calculate the number of days to wait for a warmer temperature


        }

        stack.push(i); // Push the current index onto the stack
    }
    return result;
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]