// to find the smallest number of an array

function MinOfArray(arr) {
if(!arr.length) return undefined;

let min = arr[0];

for(let m of arr){
if (m < min) {
 min = m;
}
}  


return min;


}

console.log(MinOfArray([1,2,5,6]))



