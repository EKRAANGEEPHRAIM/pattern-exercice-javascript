// group of anagrams

function groupAnagrams(strs){
    const map = {};

    for(let word of strs){
        /**The sort() method of Array instances sorts the elements of an existing array and returns a reference to that same array, now sorted. 
         * 
        */


        const key = word.split("").sort().join("");
        
        if(!map[key]){
            map[key] = []
        }

        map[key].push(word);
    }

    return Object.values(map)
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(words));


//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]