/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if this char is a vowel count
    const check_vowel = isVowel(char)
    if (check_vowel) {
      count += 1;
    }
  }
  return count;
}

function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
module.exports = countVowels;
