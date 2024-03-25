/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //make lowercase
  str = str.toLowerCase();
  //make a copy of the string backwards and check if they are the same
  let backwards = makeBackwards(str);
  if (backwards == str) {
    return true;
  }
  return false;
}

//
function makeBackwards(str) {
  //make a copy of str(input) and turn it into a array
  let output = str.split('');

  //pointer for switching backwards
  changeIndex = 0
  // iterate backward from the input string
  for (let i = (str.length - 1); i >= 0; i--) {
    //if it is a alphabet
    if (isAlpha(str[i])) {
      //find the reverse index to switch to, cannot swith witha non alphabetical number
      while (!isAlpha(output[changeIndex])) {
        if (changeIndex >= output.length) {
          return output.join('');
        }
        changeIndex += 1;
      }

      //now we have a index we can swith to
      output[changeIndex] = str[i];
      //update the pointer to next index
      changeIndex += 1;
    }

  }
  return output.join('');
}

//check of alphabet
function isAlpha(char) {
  ascii = char.charCodeAt(0);
  return (ascii >= 97 && ascii <= 122);
}
module.exports = isPalindrome;
