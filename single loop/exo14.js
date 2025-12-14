//  add to start


function addFirst(arr , el ) {
    const copy = arr.slice();

    copy.unshift(el);
    return copy;
}


//add to end

function addLast( arr ,el ) {
    const p = arr.slice();
    
    p.push(el);

    return p;

}