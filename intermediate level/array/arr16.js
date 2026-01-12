// rotate left



function rotateLeft(arr,k){
    k = k % arr.length;

    return arr.slice(k).concat(arr.slice(0,k));
}
//O(n)

console.log(rotateLeft([1,2,3,4,5], 3));//[ 4, 5, 1, 2, 3 ]