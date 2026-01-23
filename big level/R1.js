// Counter from n to 0 (recursive)

function countDown(n){
    if(n < 0) return;

    console.log(n)
    countDown(n-1)
}

console.log(countDown(15))


// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// undefined