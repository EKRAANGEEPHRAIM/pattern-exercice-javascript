//reversestring

function reverseStringRec(str){
if(str === '') return '';
return reverseStringRec(str.slice(1)) + str[0]
}

//O(n)

console.log(reverseStringRec('ange'))//egna
