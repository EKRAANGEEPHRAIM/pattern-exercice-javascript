// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1,2,3]))


// function findMax(arr){
//     let max = arr[0];
//     for(let i = 0 ; i < arr.length ; i++){
//         if( arr[i] > max){
//              max = arr[i];

//         }
//     }

//     return max
// }

// console.log(findMax([1,2,3]))


// function reverseArray(arr){
//     let left = 0 ;

//     let right = arr.length -1;

//     while(left < right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//        arr[right] = temp;

//        // [arr[left], arr[right]] = [arr[right] , arr[left]]

//         left++;
//         right--;
//     }
//     return arr;
// }

// console.log(reverseArray([1,2,3,4]))


// function removeDuplicate(arr){
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate([1,1,2,2,3,3,4,4]))


// function targetArray(arr, target ){
//     for(let i = 0 ; i < arr.length ; i++){
//         for(j = i + 1 ; j < arr.length ; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i] , arr[j]]
//             }
//         }
//     }
// } 

// console.log(targetArray([1,5,3,4,6], 5))


function isValid(s){
    const stack = [];
    const map = { '(': ')', '[': ']', '{': '}' };


    for(let char of s) {
        if(map[char]){
            stack.push(map[char]);
        }
        else{
            if(stack.pop() !== char) return false
        }
    }

    return stack.length === 0
}

console.log(isValid({}))