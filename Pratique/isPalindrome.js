// is a palindrome

/***
 * @param {string} 
 */

function isPalindrome(s){
    let left = 0 , right = s.length - 1

    const isAlnum = (c) => /[a-zA-Z0-9]/.test(c)


    while(left < right){

        // Move non-alphanumeric characters to the left
        while(left < right && !isAlnum(s[left])) left++;

        // Move non-alphanumeric characters to the right
        while(left < right && !isAlnum(s[right])) right--;


        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true

}