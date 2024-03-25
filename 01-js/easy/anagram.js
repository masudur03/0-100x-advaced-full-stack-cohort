/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //first we check if they are the same length
  //pick a char from str1 and check if this char is in the str2
  // if yes, then remove the char from str2
  //then repeat this process untill the len of str1 loop finihes or when a char is not found in str2
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];

    //check if car1 is in str2 and get the index at which it resides
    let check = checkChar(char1, str2);
    if (check == false) {
      //the char dose not exist, it is not a anagram
      return false;
    } else {
      //remove this char form str2
      str2 = str2.replace(char1, '');
    }
  }
  //if we are here than it is an anagram
  return true;

}


function checkChar(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      //give  me the index at which this char resides
      return true;
    }
  }
  //if it is not found
  return false;
}

module.exports = isAnagram;
