/** 
 * # Chunk
 * 
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 * 
 * ## Examples
 * 
 * ```javascript
   chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
   ```
 * ```javascript
   chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
   ```
 * ```javascript
   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
   ```
 * ```javascript
   chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
   ```
 * ```javascript
   chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
   ```
 * @param {number[]} array 
 * @param {number} size 
 */
function chunk(array, size) {
    const chunked = [];
    for(let number of array) {
        const tail = chunked[chunked.length - 1];
        if (typeof tail === 'undefined' || tail.length >= size) {
            chunked.push([number]);
        } else {
            tail.push(number);
        }
    }
    return chunked;
}

module.exports = chunk;
