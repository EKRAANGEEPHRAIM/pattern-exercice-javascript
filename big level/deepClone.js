function deepClone(obj){
    if(obj === null || typeof obj !== "object") return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}

//recursif

console.log(deepClone([1,5,2,6]))