// Counting the vowels in a word

function countVowel(str) {

    // A Set object allows you to store a collection of unique values ​​of any type, whether they are primitive values ​​or objects
const vowels = new Set(['a','e' ,'i', 'o' , 'u' , 'y']) ;

let c = 0 ; //counter


for (let ch of str.toLowerCase()){
    if(vowels.has(ch)){
        c++;
    }

}
return c ;
}
// example
console.log(countVowel('eat'))