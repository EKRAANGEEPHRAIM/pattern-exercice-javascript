function firstUniqueChar(str){
    const freq = {};

    for(let c of str) freq[c]= (freq[c] || 0) + 1;
    for(let c of str) if(freq[c] === 1) return c;
    return null;

}

console.log(firstUniqueChar(`I'm eating`)) //I