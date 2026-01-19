// Anagram


function areAnagram(a, b){
if(a.length !== b.length) return false;

const count = {};

for(let c of a ) {
    count[c] = (count[c] || 0) + 1 ;

    
}

for(let c of b ) {
    if(!count[c]) return false;
    count[c]--;
}

return true;
}

// Frequency Counter — O(n)
console.log(areAnagram('aba', 'baa'))// true