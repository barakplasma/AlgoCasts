// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 *
 * @param {Map<string, number>} prevMap
 * @param {string} currChar
 */
function addToCharMap(prevMap, currChar) {
  const prevMapValue = prevMap.get(currChar) || 0;
  prevMap.set(currChar, prevMapValue + 1);
  return prevMap;
}

/**
 *
 * @param {string[]} charArr
 * @returns {Map<string, number>}
 */
function generateCharMap(charArr) {
  return charArr.reduce(addToCharMap, new Map());
}

function maxChar(str) {
  const charArr = str.split("");
  const charMap = generateCharMap(charArr);

  let mostCommonChar = ['0', 0];
  for (let char of charMap.entries()) {
    if (char[1] > mostCommonChar[1]) {
      mostCommonChar = char;
    }
  }
  return mostCommonChar[0];
}

module.exports = maxChar;
