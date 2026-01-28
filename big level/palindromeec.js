function isPalindromeRec(str, l = 0 , r = str.length - 1){
    if(l >= r) return true;

    if(str[l] !== str[r]) return false;
    return isPalindromeRec(str , l + 1 , r - 1)
}
//O(n)


console.log(isPalindromeRec('etikite', 0, 6))//true

/**
 * explaining
 * → str[0]='e', str[6]='e' ✓
 */