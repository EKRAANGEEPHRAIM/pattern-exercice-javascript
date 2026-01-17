// palindrome

function isPalindrome(str){
    let left = 0 , right = str.length - 1;
    while(left  < right){
      if(str[left] < str[right]){
        return false
      }  

      left++;
      right--;
    }
    return true ;
}


console.log(isPalindrome("etikite"));//true
// check if it is a clean palindrome

function isCleanPalindrome(str){
    const s = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    return isPalindrome(s);
}

console.log(isCleanPalindrome("etikite"))//true