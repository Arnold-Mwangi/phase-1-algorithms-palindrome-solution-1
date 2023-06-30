function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase
  reversed_word = word.split("").reverse().join("")
  if(word ===reversed_word ){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  initialize isPandilome function
  convert the string to lower case
  reverse the string
  compare the string with the reversed string
  if equal
  return true
  else return false
*/

/*
  Add written explanation of your solution here
  i should write an usPandilome function which returns true if the string passed fowards is the same as backwards and should else it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
