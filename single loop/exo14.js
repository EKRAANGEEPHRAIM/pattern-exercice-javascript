// to sort an array whithout used .sort()

function numberSort(arr) {
    for(let i = 0 ; i < arr.length ; i++) {
        for(let j = 0 ; j < arr.length - 1 ; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1] , arr[j]]
            }
        }
    }

    return arr;
}

console.log(numberSort([25,52,2,3,24])); //[ 2, 3, 24, 25, 52 ]






