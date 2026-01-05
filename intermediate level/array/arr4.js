// reverse a table

function reverseTable(arr){
    let left = 0 , right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]; // reverse

        left++;
        right--;
    }
    return arr;
}

console.log(reverseTable([1,2,3,4]))//[ 4, 3, 2, 1 ]