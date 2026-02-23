// groups of anagrams
//using Map()
function groupAnagrams(str){
    //The Map() constructor allows you to create Map objects
    const map = new Map;

    for(let word of str){
        const keyvalue = word.split("").sort().join("");

        if(!map.has(keyvalue)){
            map.set(keyvalue , []);
        }

        map.get(keyvalue).push(word);
    }

    return Array.from(map.values())
}


const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(words))/**
 * [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
 */

