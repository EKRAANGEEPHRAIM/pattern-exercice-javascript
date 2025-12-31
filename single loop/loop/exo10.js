// counting vowel 

function countVowels(str){
    let count = 0;
    let vowels = "aeiouy";

    
    for(let i = 0 ; i < str.length ; i++) {
        if(vowels.includes(str[i])) {
             count++;
        }
    }

    return count ;
}

//O(n)


console.log(countVowels("mange"));