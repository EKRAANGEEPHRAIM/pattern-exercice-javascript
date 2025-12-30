// count the consonants in a string


function countConsonants(str){
    const vowels = "aeiou";

    let count= 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }

    return count;
}

console.log(countConsonants('je manges'))// 3