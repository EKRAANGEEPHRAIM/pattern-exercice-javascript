  /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    function topKFrequent(nums, k) {
      
          const freq = {};

        //  Count the frequencies
        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        //  Sort by frequency
        return Object.entries(freq) //Transform the object into a array
            .sort((a, b) => b[1] - a[1])//sort in descending order
            .slice(0, k)
            .map(item => Number(item[0]));
    }

    console.log(topKFrequent([1,2,2,3,3,3],2))//[ 3, 2 ]