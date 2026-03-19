    /**
     * @param {number[]} prices
     * @return {number}
     */
function    maxProfit(prices) {
 let result = 0 , l = 0 , r = 1 ;

 while(r < prices.length) {
   if(prices[l] < prices[r]) {
    const profit = prices[r] - prices[l];
    result = Math.max(result , profit)
   } 
   else{
    l = r
   }
r++;

 } 

 return result;
     }

console.log(maxProfit([7,1,5,3,6,4]))//5