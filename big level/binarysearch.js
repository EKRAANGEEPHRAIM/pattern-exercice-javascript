// search binary(recursive)



function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
        return binarySearchRec(arr, target, left, mid - 1);
    }

    return binarySearchRec(arr, target, mid + 1, right);
}

// O(log n)

console.log(binarySearchRec([1, 2, 3, 4, 5, 6, 7], 4));