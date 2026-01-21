//count vowels

function countVowel(str){
    const vowels = new Set('aeiou');

    let count = 0 ;

    for(let c of str.toLowerCase()){
        if(vowels.has(c)) count++;
    }
    return count;
}
//O(n)
console.log(countVowel('ange'))//2