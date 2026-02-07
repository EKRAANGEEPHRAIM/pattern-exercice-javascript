// remove the last element
 function removeLast(arr,el) {
    const p = arr.slice(el);

    p.pop(el);
    return p;
 }

 console.log(removeLast([1,2,3]))